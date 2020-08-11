@extends('layouts.admin')
@section('title')
    DASHBOARD
@endsection
@section('content')
<div class="col-lg-4">
    <div class="card">
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
@endsection

