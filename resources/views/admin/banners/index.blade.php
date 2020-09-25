@extends('layouts.admin')
@section('title')
    All Banners
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Banners</h1>
    </div>
    <div class="col-12">
        <a href="{{route('banners.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Create Banner
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="banners-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">Title</th>
                <th scope="row">description</th>
                <th scope="row">Product</th>
                <th scope="row">Photo</th>

                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($banners)
                @foreach($banners as $banner)
                    <tr>
                        <td>{{$banner->id}}</td>
                        <td>
                            <a href="">{{$banner->title}}</a>
                        </td>
                        <td>{{$banner->description}}</td>
                        <td>{{$banner->product->name}}</td>
                        <td><img height="60" src="{{$banner->photo ? asset('/images/banners/' . $banner->photo->file) : "Geen foto
                        momenteel"}}" alt=""></td>
                        <td>{{$banner->created_at}}</td>
                        <td>{{$banner->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminBannersController@destroy', $banner->id)}}"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger"><i class="fas fa-trash"></i>
                                        Delete banner
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
