@extends('layouts.admin')
@section('title')
    ADD BANNERS
@endsection
@section('content')
    <div class="col-12">
        <h1>Add Banner</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminBannersController@store')}}" enctype="multipart/form-data">
            @csrf
            @method('POST')
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fab fa-product-hunt"></i></div>
                            </div>
                            <input type="text" class="form-control" name="title" placeholder="title">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-tags"></i></label>
                            </div>
                            <select name="product_id" class="custom-select">
                                <option value="" disabled selected>Select a product</option>
                                @foreach($products as $product)
                                    <option value="{{$product->id}}">{{$product->name}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="photo_id">Photo:</label>
                        <input type="file" class="form-control-file" id="photo_id" name="photo_id">
                    </div>

                </div>
                <div class="col-8">
                    <div class="form-group">
                        <div class="card">
                            <div class="card-header">
                                Description
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" name="description" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Create Banner
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
