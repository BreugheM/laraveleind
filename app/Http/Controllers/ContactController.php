<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    //
    public function create(){//dit staat in verbinding met de show route!!
        $user = Auth::user();
        return view('contact', compact('user'));
    }
    public function store(Request $request){
        $data = $request->all();
        Mail::to(request('email'))->send(new Contact($data));
        return redirect('/contact');

    }
}
