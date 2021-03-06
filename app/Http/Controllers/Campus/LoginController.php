<?php

namespace App\Http\Controllers\Campus;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Supervisor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    function __invoke()
    {
        $return = false;
        $APP = [
            'ID'    => 'local.6149ff4c7fcf40.88217011',
            'CODE'  => 'hpSC3PDk3TGpW1tWTqozH67k2JCD9n6ZY00Zp501baj8sNWvFW'
        ];

        //  ЭТАП 1 - авторизация учетной записи в ЛИЧНОМ КАБИНЕТЕ
        //  редирект на страницу авторизации
        //  редирект обратно после успешной авторизации
        if (!isset($_REQUEST['code'])) {
            //return redirect()->away('http://exmple.com');

            //header('HTTP 302 Found');
            //header('Location: https://int.istu.edu/oauth/authorize/?client_id=' . $APP['ID']);
            return json_encode(['url' => 'https://int.istu.edu/oauth/authorize/?client_id=' . $APP['ID']]); //);
            exit;
        }

        //  ЭТАП 2 - авторизация приложения
        if (isset($_REQUEST['code'])) {
            //  формирование параметров запроса
            $url = implode('&', [
                'https://int.istu.edu/oauth/token/?grant_type=authorization_code',
                'code=' . $_REQUEST['code'],
                'client_id=' . $APP['ID'],
                'client_secret=' . $APP['CODE']
            ]);
            //  выполнение запроса и обработка ответа

            $data = @file_get_contents($url);

            if (explode(' ', $http_response_header[0])[1] !== '200') return false;
            $data = json_decode($data, true);
        }

        //  ЭТАП 3 - запрос данных по учетной записи
        if (isset($data['client_endpoint']) && isset($data['access_token'])) {
            //  формирование параметров запроса
            $url = $data['client_endpoint'] . 'user.info.json?auth=' . $data['access_token'];
            //  выполнение запроса и обработка ответа
            $data = @file_get_contents($url);
            if (explode(' ', $http_response_header[0])[1] !== '200') return false;
            $data = json_decode($data, true);
            //  проверка наличия структуры данных
            if (isset($data['result']['email'])) $return = $data['result'];
        }

        $api_token = null;
        setcookie('is_student', $return['is_student']);
        if ($return['is_student'])
            $api_token = $this->authStudent($return);
        else
            $api_token = $this->authTeacher($return);
        setcookie('token', $api_token, ['httponly' => true]);
        return redirect('/');;
        //json_encode(['token' => $api_token]);
    }

    private function authTeacher($return)
    {
        $fio = $return['last_name'] . ' ' . $return['name'] . ' ' . $return['second_name'];
        $email = $return['email'];
        $position = $return['data_teacher']['dep'];

        $api_token = hash('sha256', Str::random(60));

        $supervisor = Supervisor::where('email', $email)->limit(1)->get();

        if ($supervisor->count() == 0) {
            Supervisor::create([
                'fio' => $fio,
                'email' => $email,
                'position' => $position,
                'about' => '',
                'api_token' => $api_token
            ]);
        } else {
            Supervisor::where('fio', $fio)->limit(1)->update([
                'fio' => $fio,
                'email' => $email,
                'position' => $position,
                'api_token' => $api_token
            ]);
        }

        return $api_token;
    }

    private function authStudent($return)
    {
        //работа с пользователями
        $numz = $return['data_student']['nomz'];
        $user = Candidate::where('numz', $numz)->limit(1)->get();
        $fio = $return['last_name'] . ' ' . $return['name'] . ' ' . $return['second_name'];
        $group = $return['data_student']['grup'];
        //высчитываем номер курса из группы
        $course = intval(explode('-', $group)[1]);
        //если сентябрь то на курс выше
        $course = date('m') > 8 ? date('y') - $course + 1 : date('y') - $course;
        $api_token = hash('sha256', Str::random(60));


        if ($user->count() == 0) {
            Candidate::create([
                'fio' => $fio,
                'email' => $return['email'],
                'numz' => $numz,
                'phone' => '',
                'about' => '',
                'course' => $course,
                'training_group' => $group,
                'api_token' => $api_token
            ]);
        } else {
            Candidate::where('numz', $numz)->limit(1)->update([
                'fio' => $fio,
                'email' => $return['email'],
                'course' => $course,
                'training_group' => $group,
                'api_token' => $api_token
            ]);
        }

        return $api_token;
    }
}
