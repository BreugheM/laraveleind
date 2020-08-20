@extends('layouts.admin')
@section('title')
    DASHBOARD
@endsection
@section('content')
<div class="col-lg-4">
    <div class="card shadow-sm mb-2">
        <div class="card-header">
           <b>Reviews</b>
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="{{route('reviews.index')}}" class="btn btn-primary">Manage reviews</a>
        </div>
    </div>
</div>
<div class="col-lg-8">
    <div class="card shadow-sm mb-2">
        <div class="card-header">
            <b><i class="fab fa-product-hunt mx-2"></i>Products</b>
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="{{route('products.index')}}" class="btn btn-primary">View all products</a>
            <a href="{{route('products.create')}}" class="btn btn-success">Add Product</a>
        </div>
    </div>
</div>
@endsection

