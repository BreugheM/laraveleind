@extends('layouts.front')
@section('title')
    Shop
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
                        <div class="list-group-item">Reviews</div>
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
    <section id="productpage" class="container-fluid my-1 py-5">
        <div class="row bg-white">
            <div class="col-3 d-flex flex-column ">
                <a href="{{route('shop')}}" class="d-flex justify-content-center">
                    <div id="backbtn" class="my-3 my-lg-5 d-flex p-1 align-items-center justify-content-center"><i
                            class="fas fa-arrow-left m-0 mr-2"></i>Back to Shop</div>
                </a>

                <h2 class="my-3">{{$product->name}}</h2>
                <p>&euro; {{$product->price}} </p>
                {{--<p class="mb-1 mt-lg-4">color</p>
                <ul class="d-lg-flex p-0 justify-content-center">
                    <li class="d-flex justify-content-center my-1">
                        <label id="blauwradio" for="colour_Blue"  class="btn-colour mx-lg-2"></label>
                        <input type="radio" name="colour" value="value_Blue" id="colour_Blue" class="input-invisible" required>
                    </li>
                    <li class="d-flex justify-content-center my-1">
                        <label id="roodradio" for="colour_Blue"  class="btn-colour mx-lg-2"></label>
                        <input type="radio" name="colour" value="value_Red" id="colour_Red" class="input-invisible" required>
                    </li>
                    <li class="d-flex justify-content-center my-1">
                        <label id="grijsradio" for="colour_Blue"  class="btn-colour mx-lg-2"></label>
                        <input type="radio" name="colour" value="value_Grey" id="colour_Grey" class="input-invisible" required>
                    </li>
                </ul>--}}


               {{-- <div class="qty my-3">
                    <span class="minus bg-dark">-</span>
                    <input type="number" class="count" name="qty" value="1">
                    <span class="plus bg-dark">+</span>
                </div>--}}
                <a href="{{route('addToCart',$product->id)}}" class="d-flex justify-content-center">
                    <button id="addbtn" class="my-5 py-3 my-lg-4 mx-auto">Add to cart</button>
                </a>

                <div id="share" class="d-flex justify-content-center align-items-center my-3 my-lg-5">
                    <i class="fas fa-share-alt mr-2"></i>
                    <p class="m-0 my-1">SHARE THIS</p>
                </div>




            </div>
            <div class="col-9 ">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-start mt-5 align-items-lg-center ">
                        <img class="img-fluid" src="{{$product->photo ? asset('/images/products/' . $product->photo->file) : "Geen foto
                                    momenteel"}}" alt="">
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 ">
                        <header>
                            <h2>{{$product->name}}</h2>
                        </header>
                        <p class="d-flex justify-content-end m-4">

                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                                    aria-expanded="false" aria-controls="collapseExample">
                                Description
                                <i class="fas fa-long-arrow-alt-down"></i>
                            </button>
                        </p>
                        <div class="collapse mb-4" id="collapseExample">
                            <div class="card card-body">
                                {{$product->description}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
