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
    <section id="homeSectie3" class="container-fluid p-0">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                @if($banners)
                @foreach($banners as $banner)
                <div class="carousel-item @if($loop->first) active @endif">
                    <img   src="{{$banner->photo ? asset('/images/banners/' .
                                $banner->photo->file) :
                                "http:/placehold
                            .it/62x62"}}" class="d-block w-100 fixed-height" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">{{$banner->title}}</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">{{$banner->description}}</p>
                        <a href="{{route("home.product" , $banner->product->name)}}">
                            <button class="btncaroussel mb-lg-4">Shop now </button>
                        </a>

                    </div>
                </div>
                    @endforeach
                    @endif


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
    {{--<section id="homeSectie4" class="container-fluid">
        <div class="row">
            <div class="col-10 offset-1">
                <header id="titelTS" class="d-flex justify-content-center my-4 my-lg-5 bg-white mx-auto rounded-pill ">
                    <h2 class="m-0">TOP SALES</h2>
                </header>
                <div class="row my-3">
                    <div class="col-lg-6 mb-2">
                        <a href="product.html" class="d-flex justify-content-center"><img class="img-fluid " src="images/Box.png" alt=""></a>
                    </div>
                    <div class="col-lg-6 mb-2">
                        <a href="product.html" class="d-flex justify-content-center"><img class="img-fluid " src="images/Box.png" alt=""></a>
                    </div>
                                   <div class="col-lg-6 my-3 my-lg-0">
                                        &lt;!&ndash;<img class="img-fluid " src="img/Box.png" alt="">&ndash;&gt;
                                       <div class="box1"> <img src="img/Box.png" alt="">
                                           <h3 class="title">William</h3>
                                           <ul class="icon">
                                               <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                           </ul>
                                       </div>
                                   </div>

                </div>
            </div>
        </div>
    </section>--}}

    @include('includes.reviews')


    @include('includes.might-like')

    <section id="homeSectie5" class="container-fluid">
        <div class="row">
            <article class="col-10 offset-1 d-flex justify-content-center my-4">
                <a href="{{route('shop')}}" id="btn2" class="btn rounded-pill mt-2 py-2">SHOP NOW</a>
            </article>
        </div>
    </section>
@endsection
