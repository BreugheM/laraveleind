@extends('layouts.admin')
@section('title')
    All Brands
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Brands</h1>
    </div>
    <div class="col-12">
        <a href="{{route('brands.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Create Brand
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="brands-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">Name</th>
                <th scope="row">description</th>
                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($brands)
                @foreach($brands as $brand)
                    <tr>
                        <td>{{$brand->id}}</td>
                        <td>
                            <a href="{{route('brands.edit', $brand->id)}}">{{$brand->name}}</a>
                        </td>
                        <td>{{$brand->description}}</td>
                        <td>{{$brand->created_at}}</td>
                        <td>{{$brand->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminBrandsController@destroy', $brand->id)}}"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger"><i class="fas fa-trash"></i>
                                        Delete brand
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
