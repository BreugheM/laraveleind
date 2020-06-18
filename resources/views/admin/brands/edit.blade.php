@extends('layouts.admin')
@section('title')
    Edit BRANDS
@endsection
@section('content')
    <div class="col-12">
        <h1>Edit Brand</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminBrandsController@update', $brand->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-copyright"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="Name" value="{{$brand->name}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-copyright"></i></div>
                            </div>
                            <input type="text" class="form-control" name="description" placeholder="Description"
                                   value="{{$brand->description}}">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Update Brand
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
