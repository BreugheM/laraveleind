<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>@yield('title')</title>

    {{--<link href="app.css" rel="stylesheet">--}}
    <link rel="stylesheet" href="{{asset('css/front-app.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

</head>
<body>
<header class="d-none">
    <h1>home</h1>
    <h2>home2</h2>
    <h3>home3</h3>
    <h4>home4</h4>
</header>
<section id="homeSectie1" class="container-fluid">
    <div class="row bg-white" id="navdeel1">
        <div class="col-lg-10 offset-lg-1 my-3">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="{{route('index')}}"><img src="{{asset('images/portland.png')}}" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Devices</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Delivery & Payment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Guarantee</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>

                    </ul>
                    <a href="{{route('checkout')}}">
                        <span class="fa-2x" data-count="">

                                <i class="fa fa-shopping-cart fa-2x primary-cart"></i>
                            </span>
                    </a>

                        <p class="my-auto d-none d-lg-block">CART <span id="aantalItems" class="py-1 px-2 m-0">{{Session::has('cart') ? Session::get('cart')->totalQuantity:'0'}}</span></p>
                    <form id="form1" class="form-inline my-2 my-lg-0 d-block d-lg-none">
                        <div id="zoekbar2" class="input-group ">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fas fa-search"></i></button>
                            </div>
                            <input type="text" class="form-control" placeholder="What are you looking for?" aria-label="Example text with button addon"
                                   aria-describedby="button-addon1">
                        </div>
                    </form>
                    <button id="btn1" class="px-3 mx-lg-4">sign in</button>
                </div>
            </nav>
        </div>
    </div>

</section>
@yield('content')

<section id="voeter" class="container-fluid">
    <div class="row py-5">
        <div class="col-lg-10 offset-lg-1">
            <div class="row">
                <div class="col-lg-4 d-flex align-items-center">
                    <img src="{{asset('images/portland2.png')}}" alt="">
                </div>
                <div id="voeterItems" class="col-lg-4">
                    <ul class="list-group list-group-horizontal d-flex justify-content-around">
                        <li class="list-group-item zwartebg">HOME</li>
                        <li class="list-group-item zwartebg">SHOP</li>
                        <li class="list-group-item zwartebg">TEAM</li>
                        <li class="list-group-item zwartebg">ABOUT US</li>
                        <a href="">
                            <li class="list-group-item zwartebg">CONTACT</li>
                        </a>

                    </ul>
                </div>
                <div id="voeterIcons" class="col-lg-4 d-flex justify-content-end align-items-center mb-2 mb-lg-0">
                    <i class="icoon fab fa-twitter mx-3"></i>
                    <i class="icoon fab fa-facebook mx-3"></i>
                    <i class="icoon fab fa-google-plus-g mx-3"></i>
                </div>
            </div>
            <div id="rijvoeter" class="row pt-5">
                <div class="col-lg-6">
                    <p class="tekstvoeter">She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey
                        for having been born on a Friday.</p>
                </div>

                <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                    <p class="tekstvoeter">PRIVACY POLICY</p>
                    <p class="tekstvoeter">TERMS AND CONDITIONS</p>
                </div>
            </div>
        </div>
    </div>
</section>

{{--<script type="text/javascript" src="app.js"></script>--}}
<script src="{{asset('js/front-app.js')}}"></script>



</body>
</html>
