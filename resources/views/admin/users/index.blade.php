@extends('layouts.admin')
@section('title')
    onze users
@endsection
@section('content')
    <div class="col-12">
        @if(Session::has('deleted_user'))
            <p class="alert alert-success">{{session('deleted_user')}}</p>
        @endif
    </div>
    <div class="col-12">
        <h1>All users</h1>
    </div>
    <div class="col-12">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Role</th>
                <th scope="col">Active</th>
                <th scope="col">Created</th>
                <th scope="col">Updated</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            @if($users)
                @foreach($users as $user)
                    <tr>
                        <td>{{$user->id}}</td>
                        <td>

                            <img height="62" src="{{$user->photo ? asset('/images/userimg/' . $user->photo->file) :
                            'http:/placehold
                            .it/62x62'}}" alt="">
                        </td>
                        <td>
                            <a href="{{route('users.edit',$user->id)}}">{{$user->name}}</a>

                        </td>
                        <td>{{$user->email}}</td>
                        <td>
                            @foreach($user->roles as $role)
                                <span class="badge badge-pill badge-info">{{$role->name}}</span>
                            @endforeach
                        </td>
                        <td>
                            @if($user->is_active != null)
                                <p class="badge badge-success">Active</p>
                            @else
                                <p class="badge badge-danger">Not active</p>
                            @endif
                        </td>
                        <td>{{$user->created_at}}</td>
                        <td>{{$user->updated_at}}</td>
                        <td>
                            <a class="btn btn-outline-warning rounded-pill w-100 mb-1" href="{{route('users.edit',
                            $user->id)}}">Edit</a>
                        </td>
                        <td>
                            <form method="POST" action="{{action('AdminUsersController@destroy', $user->id)}}"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger"><i class="fas fa-trash"></i>
                                        Delete User
                                    </button>
                                </div>

                            </form>
                        </td>
                    </tr>
                @endforeach
            @endif
            </tbody>
        </table>
        {{ $users->links() }}
    </div>


@endsection
