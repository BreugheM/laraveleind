<?php

namespace App\Http\Controllers;

use App\Photo;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    //
    public function create()
    {
        //
        $roles = Role::all();
        return view('auth.register', compact('roles'));
    }
    public function store(Request $request)
    {
        //
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->is_active = $request->is_active;
        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images/userimg', $name);
            $photo = Photo::create(['file'=>$name]);
            //$input['photo_id'] = $photo->id;
            $user->photo_id = $photo->id;
        }
        $user->password = Hash::make($request['password']);
        $user->save();
        //User::create($input);
        $user->role_id = $request->role_id;


        //Session::flash('success', $request->name . ' roles added');

        return redirect('home');
    }
}
