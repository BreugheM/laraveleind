@extends('layouts.admin')
@section('title')
    ADD Categories
@endsection
@section('content')
    <div class="col-12">
        <h1>Add Category</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminCategoriesController@store')}}" enctype="multipart/form-data">
            @csrf
            @method('POST')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-tags"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-tags"></i></div>
                            </div>
                            <input type="text" class="form-control" name="description" placeholder="Description">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Create Category
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
