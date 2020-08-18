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
    <section id="homeSectie3" class="container-fluid p-0">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active indicatoren"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" class="indicatoren"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" class="indicatoren"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="{{asset('images/Placeholder.png')}}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">iPhone 6 32Gb Black</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                        <button class="btncaroussel mb-lg-4">Shop now </button>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="{{asset('images/Placeholder.png')}}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">iPhone 6 32Gb Black</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                        <button class="btncaroussel mb-lg-4">Shop now </button>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="{{asset('images/Placeholder.png')}}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">iPhone 6 32Gb Black</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                        <button class="btncaroussel mb-lg-4">Shop now </button>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
   {{-- <section id="sorted" class="container-fluid ">
        <div id="sortedrow" class="row">
            <div class="col-10 offset-1 my-3 bg-white">
                <article class="row">
                    <div class="col-12 d-lg-flex align-items-center justify-content-lg-around">
                        <p class="mx-0 my-3">SORT BY: </p>
                        <div id="selected" class="input-group my-3">
                            <select class="round" id="inputGroupSelect01">
                                <option selected>BEST MATCH</option>
                                <option value="1">CHEAPEST</option>
                                <option value="2">POPULAR</option>
                            </select>

                        </div>
                        <div id="keywords" class="d-flex align-items-center my-3">
                            <p class="m-0 ">KEYWORDS</p>
                            <input id="inputkeywords" class="ml-3" type="text" placeholder="    Tablet">
                        </div>
                        <div id="price" class="d-flex align-items-center my-3">
                            <p class="my-0 mr-3">PRICE</p>
                            <input class="inputsprice"  type="text" placeholder="      10">
                            <p class="my-0 mx-2"> - </p>
                            <input class="inputsprice" type="text" placeholder="   1000">
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>--}}
    <section id="shopcenter" class="container-fluid mt-5">
        <div class="row">
            <div class="col-lg-10 offset-lg-1 p-0">
                <div class="row">
                    <div class="col-3 pr-0">
                        <div id="accordion" class="mb-4">
                            <div class="card">
                                <div class="card-header p-0" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Categories
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body p-0">
                                        <a class="d-flex justify-content-center" href="{{route('shop')}}"><p>All</p></a>
                                        @foreach($categories as $category)
                                            <a href="{{route('productsPerCategory', $category->id)}}"><p
                                                    class="cardTekst">{{$category->name}}</p></a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header p-0" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Brands
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body p-0">
                                        <a class="d-flex justify-content-center" href="{{route('shop')}}"><p>All</p></a>
                                        @foreach($brands as $brand)
                                        <a href="{{route('productsPerBrand', $brand->id)}}"><p class="cardTekst">{{$brand->name}}</p></a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            {{--<div class="card">
                                <div class="card-header p-0" id="headingFour">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Sale
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div class="card-body">
                                        <p class="cardTekst">Anim</p>
                                    </div>
                                </div>
                            </div>--}}

                        </div>

                        {{--<div id="checkList" class="py-2">
                            <h4 class="m-0 pb-3">condition</h4>
                            <div class="d-flex align-items-center">
                                <input class="ml-1" type="checkbox">
                                <p class="m-0 ml-2">new</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="ml-1" type="checkbox">
                                <p class="m-0 ml-2">Used</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="ml-1" type="checkbox">
                                <p class="m-0 ml-2">For parts</p>
                            </div>

                        </div>--}}


                    </div>
                    <div class="col-9 pl-1">
                        <div class="row">
                            @foreach($products as $product)
                            <div class="col-lg-4 col-12 d-flex justify-content-center mb-3">
                                <div class="card" style="width: 18rem;">
                                    <img src="{{$product->photo ? asset('/images/products/' . $product->photo->file) : "Geen foto
                                    momenteel"}}"
                                         class="card-img-top" alt="...">
                                    <div class="card-body d-flex flex-column justify-content-center">
                                        <a href="{{route("home.product" , $product->name)}}">
                                            <h4 class="card-title">{{$product->name}}</h4>
                                        </a>

                                        <h5 class="d-flex justify-content-center">€ {{$product->price}} </h5>
                                        <p class="card-text">{{$product->description}}.</p>
                                        <a href="{{route('addToCart', $product->id)}}" class="btn btn-primary"><b>Add to cart</b></a>
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
