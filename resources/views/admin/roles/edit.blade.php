@extends('layouts.admin')
@section('title')
    Edit ROLES
@endsection
@section('content')
    <div class="col-12">
        <h1>Edit Role</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminRolesController@update', $role->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="Name" value="{{$role->name}}">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Update Role
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
