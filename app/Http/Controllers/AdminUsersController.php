<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Photo;
use App\Product;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        //$roles = Role::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        $users = User::paginate(8);
        return view('admin.users.index', compact('users','brands','products','categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        $roles = Role::all();
        return view('admin.users.create', compact('roles','users','brands','products','categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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


        Session::flash('success', $request->name . ' roles added');

        return redirect('/admin/users');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        $roles = Role::all();
        return view ('admin.users.edit', compact('user', 'roles','users','brands','products','categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $user = User::findOrFail($id);
        if(trim($request->password)==''){
            $input = $request->except('password');
        }else{
            $input = $request->all();
            $input['password'] = Hash::make($request['password']);
        }

        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images/userimg', $name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }
        //$input['password'] = Hash::make($request['password']);
        $user->update($input);
        $user->role()->associate($request->role);
        return redirect('admin/users');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $user = User::findOrFail($id);
        //dd($user->photo);
        if($user->photo !== null){
            unlink(public_path('images/userimg/') . $user->photo->file);
            $user->photo->delete();
        }
        $user->delete();

        Session::flash('deleted_user', 'The user is deleted');
        return redirect('admin/users');
    }
    /*public function userRestore($id){
        User::onlyTrashed()->where('id',$id)->restore();
        Session::flash('softdeleted_user', 'The user has been restored');
        return redirect('admin/users');
    }*/
}
