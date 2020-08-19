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
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
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

                    @if (Auth::guest())
                        <a href="{{route('home')}}" id="btn1" class="btn btn-outline-dark px-3 mx-lg-4">sign in</a>
                    @elseif(Auth()->user()->role->name == 'Administrator')
                        <div class="dropdown ml-3">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                <img class="rounded-circle " height="25"  src="{{Auth()->user()->photo ? asset('/images/userimg/' .
                                Auth()->user()->photo->file) :
                                "http:/placehold
                            .it/62x62"}}" alt="">
                                {{Auth()->user()->name}}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="{{route('admin')}}">Go to admin page</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </div>
                        @else
                        <div class="dropdown ml-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="rounded-circle " height="25"  src="{{Auth()->user()->photo ? asset('/images/userimg/' .
                                Auth()->user()->photo->file) :
                                "http:/placehold
                            .it/62x62"}}" alt="">
                                {{Auth()->user()->name}}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </div>
                    @endif
                </div>
            </nav>
        </div>
    </div>

</section>
<main>
    @if(isset($errors) && $errors->any())
        <div class="alert alert-danger" role="alert">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
            {{ session('status') }}
        </div>
    @endif
    @if(session()->has('success'))
        <div class="alert alert-danger" role="alert">
            <ul>
                @foreach(session()->get('success') as $message)
                    <li>{{$message}}</li>
                @endforeach
            </ul>
            {{ session('status') }}
        </div>
    @endif
    @yield('content')
</main>


<section id="voeter" class="container-fluid">
    <div class="row py-5">
        <div class="col-lg-10 offset-lg-1">
            <div class="row">
                <div class="col-lg-4 d-flex align-items-center">
                    <img src="{{asset('images/portland2.png')}}" alt="">
                </div>
                <div id="voeterItems" class="col-lg-4">
                    <ul class="list-group list-group-horizontal d-flex justify-content-around">

                        <a href="{{route('index')}}">
                            <li class="list-group-item zwartebg" style="color: white">HOME</li>
                        </a>
                        <a href="{{route('shop')}}" style="color: white">
                            <li class="list-group-item zwartebg">SHOP</li>
                        </a>

                        <a href="{{route('contact')}}" style="color: white">
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
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="{{asset('js/front-app.js')}}"></script>

@stack('scripts')

</body>
</html>
