<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class MailController extends Controller
{
    public function send(){
        Mail::send(['text' => 'mail'], ['name', 'Чемитов Павел Евгеньевич'], function ($message){
            $message -> to('4sv1488@mail.ru', 'to tester') -> subject('Test email');
            $messsage ->from('projfair@istu.edu', 'Чемитов Павел Евгеньевич');
        });
    }
}
