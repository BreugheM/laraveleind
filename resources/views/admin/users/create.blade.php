@extends('layouts.admin')
@section('title')
    ADD USER
@endsection
@section('content')
    <div class="col-12">
        <h1>Add User</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminUsersController@store')}}" enctype="multipart/form-data">
            @csrf
            @method('POST')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fab fa-product-hunt"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fab fa-product-hunt"></i></div>
                            </div>
                            <input type="text" class="form-control" name="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-tags"></i></label>
                            </div>
                            <select name="role_id" class="custom-select">
                                <option value="" disabled selected>Select a role</option>
                                @foreach($roles as $role)
                                    <option value="{{$role->id}}">{{$role->name}}</option>
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
                                <option value="1">Active</option>
                                <option value="0">Not Active</option>
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
                    <div class="form-group">
                        <label for="photo_id">Photo:</label>
                        <input type="file" class="form-control-file" id="photo_id" name="photo_id">
                    </div>

                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Create User
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
