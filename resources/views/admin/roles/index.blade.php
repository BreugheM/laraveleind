@extends('layouts.admin')
@section('title')
    ALL ROLES
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Roles</h1>
    </div>
    <div class="col-12">
        <a href="{{route('roles.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Create Role
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="brands-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">Name</th>
                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($roles)
                @foreach($roles as $role)
                    <tr>
                        <td>{{$role->id}}</td>
                        <td>
                            <a href="{{route('roles.edit', $role->id)}}">{{$role->name}}</a>
                        </td>
                        <td>{{$role->created_at}}</td>
                        <td>{{$role->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminRolesController@destroy', $role->id)}}" enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger mb-1"><i class="fas fa-trash"></i>
                                        Delete
                                    </button>
                                </div>

                            </form>
                        </td>
                    </tr>
                @endforeach
            @endif
            </tbody>
        </table>
    </div>
@endsection
