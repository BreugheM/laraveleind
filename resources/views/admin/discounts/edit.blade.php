@extends('layouts.admin')
@section('title')
    EDIT DISCOUNTS
@endsection
@section('content')
    <div class="col-12">
        <h1>Edit Discount</h1>
    </div>
    <hr>
    <div class="col-12">
        <form method="POST" action="{{action('AdminDiscountsController@update', $discount->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
                            </div>
                            <input type="text" class="form-control" name="name" placeholder="{{$discount->name}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-paragraph"></i></div>
                            </div>
                            <input type="text" class="form-control" name="description" placeholder="{{$discount->description}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-percentage"></i></div>
                            </div>
                            <input type="number" min="0" max="100" step="1" class="form-control" name="percent"
                                   placeholder="{{$discount->percent}}">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>
                            Update discount
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </div>


@endsection
