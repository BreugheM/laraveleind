@extends('layouts.front')
@section('title')
    Homepage
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
    <section class="container-fluid">
        <div class="row">
            <div class="col-lg-10 offset-1" >
                <div class="row my-3">
                    @if($reviews)
                    @foreach($reviews as $review)
                    <div class="col-lg-4">
                        <div class="card shadow mb-2">
                            <div class="card-header d-flex justify-content-between ">
                                {{$review->user->name}}
                                {{--<form method="POST" action="">
                                    @csrf
                                    @method('POST')
                                    <div class="form-control">
                                        <button type="submit">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </form>--}}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote  mb-0">
                                    <p>{{$review->reviewBody}}</p>
                                    <div class="d-flex justify-content-between">
                                        <footer class="blockquote-footer"><cite title="Source Title">{{$review->user->role->name}}</cite>
                                        </footer>
                                        <span class="comment-date">{{$review->created_at->diffForHumans()}}
                                        </span>
                                    </div>

                                </blockquote>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    @endif
                </div>
                {{ $reviews->links() }}
                <div class="row my-5">
                    @if (Auth::guest())
                        <div class="col-12 d-flex justify-content-center">
                            <div class="card text-center shadow w-50">
                                <div class="card-header bg-dark">

                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Create a Review? Sign in below</h5>
                                    <a href="{{route('home')}}" class="btn btn-primary">Sign in</a>
                                </div>
                            </div>
                        </div>

                    @else
                    <div class="col-12">
                        <form action="{{action('ReviewsController@store')}}" method="POST" class=" d-flex justify-content-center">
                            @csrf
                            @method('POST')
                            <div class="card w-75">
                                <h5 class="card-header">Create review</h5>
                                <div class="card-body">
                                    <label for="reviewBody">Review</label>
                                    <textarea rows="3" placeholder="Put your review here" class="form-control mb-2" name="reviewBody"
                                              id="reviewBody"></textarea>
                                    <input type="hidden" name="user_id" value="{{Auth()->user()->id}}">
                                    <button type="submit" class="btn btn-primary">Submit review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    @endif
                </div>
            </div>
        </div>

    </section>
@endsection
