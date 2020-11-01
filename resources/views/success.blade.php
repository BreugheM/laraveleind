@extends('layouts.front')
@section('title')
    Payment Success
@endsection
@section('content')
    <section id="homeSectie2" class="container-fluid">
        <div class="row bg-white">
            <div class="col-lg-10 offset-lg-1 d-flex justify-content-center">

                <div id="list1" class="list-group list-group-horizontal d-flex flex-column flex-md-row justify-content-between ">
                    <div class="d-flex">
                        <a href="{{route('shop')}}">
                            <div class="list-group-item">Shop</div>
                        </a>
                    </div>
                    <div class="d-flex">
                        <a href="{{route('reviews')}}">
                            <div class="list-group-item">Reviews</div>
                        </a>
                        <a href="{{route('contact')}}">
                            <div class="list-group-item">Contact</div>
                        </a>
                    </div>


                </div>

                <div id="zoekbar" class="input-group my-auto ml-auto d-none d-lg-block d-lg-flex">
                    <div class="input-group-prepend d-none d-lg-block">
                        <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                    <input type="text" class="form-control d-none d-lg-block" placeholder="What are you looking for?" aria-label="Example text with button addon"
                           aria-describedby="button-addon1">
                </div>


            </div>
        </div>
    </section>
    <section class="container-fluid my-5">
        <div class="row">
            <div class="col-lg-10 offset-1" >
                <div class="d-flex justify-content-center">
                    <div class="card shadow mb-2">
                        <div class="card-header d-flex justify-content-between ">
                            Your Payment succeeded! Thank You. Where would you like to go next?



                        </div>
                        <div class="card-body d-flex flex-column justify-content-center">
                            <a href="{{route('index')}}" class="btn btn-primary w-25 mx-auto my-1">Home</a>
                            <a href="{{route('shop')}}" class="btn btn-primary w-25 mx-auto my-1">Back to Shop</a>
                            <a href="{{route('reviews')}}" class="btn btn-primary w-25 mx-auto my-1">Reviews</a>
                            <a href="{{route('contact')}}" class="btn btn-primary w-25 mx-auto my-1">Contact</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
    @include('includes.might-like')
@endsection
