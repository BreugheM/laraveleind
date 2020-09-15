@extends('layouts.admin')
@section('title')
    Edit Colors
@endsection
@section('content')
    <div class="col-12">
        <h1>Edit Color</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminColorsController@update', $color->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-tags"></i></div>
                            </div>
                            <input type="text" class="form-control" name="colorName" placeholder="colorName" value="{{$color->colorName}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-tags"></i></div>
                            </div>
                            <input type="text" class="form-control" name="hexColor" placeholder="hexColor"
                                   value="{{$color->hexColor}}">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Update color
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
