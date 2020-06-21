@extends('layouts.admin')
@section('title')
    EDIT USER
@endsection
@section('content')
    <div class="col-12">
        <h1>Edit User</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminUsersController@update', $user->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-8">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fab fa-product-hunt"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="Name" value="{{$user->name}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fab fa-product-hunt"></i></div>
                            </div>
                            <input type="text" class="form-control" name="email" placeholder="Email" value="{{$user->email}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-tags"></i></label>
                            </div>
                            <select name="role_id" class="custom-select">
                                <option value="" disabled>Select a role</option>
                                @foreach($roles as $role)
                                    @if($user->role_id == $role->id)
                                    <option selected value="{{$role->id}}">{{$role->name}}</option>
                                    @else
                                    <option  value="{{$role->id}}">{{$role->name}}</option>
                                    @endif
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-copyright"></i></label>
                            </div>
                            <select name="is_active" class="custom-select">
                                <option value="" disabled selected>Select status</option>
                                @if($user->is_active != null)
                                    <option selected value="1">Active</option>
                                    <option value="0">Not Active</option>
                                @else
                                    <option  value="1">Active</option>
                                    <option selected value="0">Not Active</option>
                                @endif

                                {{-- @foreach($options as $key => $value)
                                     <option value="{{$key}}"
                                     @if ($key == old('myselect', $model->option))
                                     selected="selected"
                                     @endif
                                     >{{$value}}</option>
                                 @endforeach--}}
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-key"></i></label>
                            </div>
                            <input type="password" name="password" >
                        </div>
                    </div>


                </div>
                <div class="col-4">
                    <div class="form-group">
                        <img class="img-thumbnail mb-3" src="{{$user->photo ? asset('/images/userimg/'.$user->photo->file)
                                 : 'geen foto momenteel'
                                }}" alt="">
                        <input type="file" class="form-control-file" id="photo_id" name="photo_id">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Update User
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
