<?php

namespace App\Http\Controllers\Admin\Mail;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Mail;

/**
* Получение всех институтов
*/
class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $emails = array();
        $content = $request->get('content');
        $subject = $request->get('subject');

        $supervizors = Supervisor::all();
        foreach ($supervizors as $supervizor) {
            array_push($emails, $supervizor.email()); // не знаю как получить мейл преподователя
        }

        if (count($emails) == 0) {
            return;
        }

        foreach($emails as $mail) {
            Mail::send(['text' => 'mail'], ['name', 'Чемитов Павел Евгеньевич'], function ($message){
                $message -> to($mail, $content) -> subject($subject);
                $messsage ->from('projfair@istu.edu', 'Чемитов Павел Евгеньевич');
            });
        }

    }
}
