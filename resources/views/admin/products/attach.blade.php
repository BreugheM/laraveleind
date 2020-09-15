@extends('layouts.admin')
@section('title')
    ADD COLOR TO PRODUCTS
@endsection
@section('content')
    <div class="col-12">
        <h1>Add Color to Product</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminProductsController@storeColorProduct')}}" enctype="multipart/form-data">
            @csrf
            @method('POST')
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-tint"></i></label>
                            </div>
                            <select id="product_id" name="product_id" class="custom-select">
                                <option value="" disabled selected>Select Product (Select one)</option>
                                @foreach($products as $product)
                                    <option value="{{$product->id}}">{{$product->name}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fas fa-tint"></i></label>
                            </div>
                            <select id="color_id" name="color_id[]" class="custom-select" multiple>
                                <option value="" disabled selected>Select Color (hold Ctrl for more)</option>
                                @foreach($colors as $color)
                                    <option value="{{$color->id}}">{{$color->colorName}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Attach
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection

