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
                        <div class="list-group-item">Top Sales</div>
                        <a href="{{route('shop')}}">
                            <div class="list-group-item">Shop</div>
                        </a>
                    </div>
                    <div class="d-flex">
                        <div class="list-group-item">Reviews</div>
                        <a href="contact.html">
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
                        <button class="btncaroussel mb-lg-4">Buy now </button>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="{{asset('images/Placeholder.png')}}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">iPhone 6 32Gb Black</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                        <button class="btncaroussel mb-lg-4">Buy now </button>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="{{asset('images/Placeholder.png')}}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-flex flex-column justify-content-start ">
                        <h5 class="slidertitel mr-auto w-50 mb-xl-5">iPhone 6 32Gb Black</h5>
                        <p class="slidertext mr-auto w-50 d-none d-lg-block">At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                        <button class="btncaroussel mb-lg-4">Buy now </button>
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
    <section id="homeSectie4" class="container-fluid">
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
                    <!--                <div class="col-lg-6 my-3 my-lg-0">-->
                    <!--                    &lt;!&ndash;<img class="img-fluid " src="img/Box.png" alt="">&ndash;&gt;-->
                    <!--                    <div class="box1"> <img src="img/Box.png" alt="">-->
                    <!--                        <h3 class="title">William</h3>-->
                    <!--                        <ul class="icon">-->
                    <!--                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
                    <!--                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
                    <!--                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>-->
                    <!--                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                    <!--                        </ul>-->
                    <!--                    </div>-->
                    <!--                </div>-->

                </div>
            </div>
        </div>
    </section>
    <section id="homeSectie5" class="container-fluid">
        <div class="row">
            <article class="col-10 offset-1 d-flex justify-content-center my-4">
                <button id="btn2" class="rounded-pill py-2">SHOP NOW</button>
            </article>
        </div>
    </section>
    <section id="reviews" class="container-fluid mt-4 d-none d-lg-block">
        <div class="row bg-white">
            <article class="col-10 offset-1 d-flex flex-column justify-content-center my-3">
                <div class="d-flex justify-content-center">
                    <header>
                        <h2>What Our Customers Have To Say</h2>
                        <p class="subtekst">Couple Of Words About This Story Section</p>
                    </header>
                </div>

                <div class="row">
                    <div class="col-lg-10 offset-1">
                        <div class="row my-4">
                            <div class="col-lg-4">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/persoon.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Celia Fields</h3>
                                        <h4 class="ondertitelsreviews">UX-expert</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">This I have produced as a scantling of Jack’s great eloquence and the force of his
                                    reasoning upon such
                                    abstruse matters.</p>
                            </div>
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/alex.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Alexander Lee</h3>
                                        <h4 class="ondertitelsreviews">Founder</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">Looking cautiously round, to ascertain that they were not overheard, the two hags
                                    cowered nearer to the fire, and chuckled heartily.
                                </p>
                            </div>
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/dinge.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Lenora Sandoval</h3>
                                        <h4 class="ondertitelsreviews">Product Manager</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">This sounded a very good reason, and Alice was quite pleased to know it. 'I never
                                    thought of that before!' she said.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <section id="reviewsmob" class="container-fluid mt-4 d-lg-none">
        <div class="row bg-white">
            <article class="col-10 offset-1 d-flex flex-column justify-content-center my-3">
                <div class="d-flex justify-content-center">
                    <header>
                        <h2>What Our Customers Have To Say</h2>
                        <p class="subtekst">Couple Of Words About This Story Section</p>
                    </header>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/persoon.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Celia Fields</h3>
                                        <h4 class="ondertitelsreviews">UX-expert</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">This I have produced as a scantling of Jack’s great eloquence and the force of his
                                    reasoning upon such
                                    abstruse matters.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/alex.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Alexander Lee</h3>
                                        <h4 class="ondertitelsreviews">Founder</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">Looking cautiously round, to ascertain that they were not overheard, the two hags
                                    cowered nearer to the fire, and chuckled heartily.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-lg-4 mt-3 mt-lg-0">
                                <div class="d-flex">
                                    <img class="fotosreviews" src="images/dinge.png" alt="">
                                    <div class="ml-1">
                                        <h3 class="titelsreviews my-0">Lenora Sandoval</h3>
                                        <h4 class="ondertitelsreviews">Product Manager</h4>
                                    </div>
                                </div>
                                <p class="tekstreviews">This sounded a very good reason, and Alice was quite pleased to know it. 'I never
                                    thought of that before!' she said.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


            </article>
        </div>
    </section>
@endsection
