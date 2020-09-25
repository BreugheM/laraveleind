@extends('layouts.front')
@section('title')
    Checkout
@endsection
@section('extra-stuff')
    <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
    <script src="https://js.stripe.com/v3/"></script>
{{--    <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>--}}
{{--    <script>paypal.Buttons().render('body');</script>--}}
    @endsection
@section('content')
    <header class="bg-white d-flex justify-content-center">
        <h1 class="my-0 py-2">Checkout</h1>
    </header>
    <section id="checkoutDeel" class="container-fluid bg-white">
        <div class="row">
            <div id="coDeel1" class="col-12 col-md-7 mb-2">
                <form>
                    <h2>Billing Details</h2>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutVoornaam">Voornaam*</label>
                                <input type="text" id="checkoutVoornaam" placeholder="  Voornaam" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutAchternaam">Achternaam*</label>
                                <input type="text" id="checkoutAchternaam" placeholder="  Achternaam" required>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutEmail">Email*</label>
                                <input type="email" id="checkoutEmail" placeholder="  email">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutCompany">Bedrijf</label>
                                <input type="text" id="checkoutCompany" placeholder="  Bedrijf">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutAdres1">Adres*</label>
                                <input type="text" id="checkoutAdres1" placeholder="  Adres">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutAdres2">Adres 2</label>
                                <input type="text" id="checkoutAdres2" placeholder="  Adres 2">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutStad">Stad*</label>
                                <input type="text" id="checkoutStad" placeholder="  Stad">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutPostcode">Postcode*</label>
                                <input type="text" id="checkoutPostcode" placeholder="  Postcode">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group d-flex flex-column">
                                <label for="checkoutTel">Telefoon*</label>
                                <input type="tel" id="checkoutTel" placeholder="  Telefoon">
                            </div>
                        </div>
                    </div>
                    {{--<h2>Levering</h2>
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Levering</th>
                            <th scope="col">Prijs</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                                <input type="radio" class="mr-3">  Standaard levering (4-5d)
                            </th>
                            <td>$ 0</td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <input type="radio" class="mr-3">  Snelle levering (1-2d)
                            </th>
                            <td>$ 5</td>
                        </tr>

                        </tbody>
                    </table>--}}
                    <textarea name="remarks" id="remarks" cols="30" rows="5" placeholder="Eventuele bestelopmerkingen" class="w-100"></textarea>



                </form>
            </div>
            <div id="coDeel2" class="col-12 col-md-5 col-lg-4 offset-lg-1 bg-white">
                @if(Session::has('cart'))
                <h2 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Bestelde artikelen</span>
                    <span class="badge badge-secondary badge-pill">{{Session::has('cart') ? Session::get('cart')->totalQuantity : '0'}}</span>
                </h2>


                <ul class="list-group">
                    @foreach($cart as $item)
                    <li class="artikels py-3 d-flex">
                        <div class="row">
                            <div class="col-4">
                                <img class="img-fluid card-img-top img-thumbnail" src="{{$item['product_image'] ? asset
                            ('/images/products/' .
                            $item['product_image']) : 'GEEN FOTOMOMENTEEL'}}" alt="">
                            </div>
                            <div class="col-8">
                                <div>
                                    <p class="my-0 titelArtikel">{{$item['product_name']}}</p>
                                    <p class="componentArtikel">€ {{$item['product_price']}} </p>
                                </div>
                                <div>
                                    <p class="componentArtikel">{{Str::limit($item['product_description'], 25, ' (...)')}}</p>
                                    <p class="componentArtikel">Quantity: </p>
                                    <form method="POST" action="{{action('FrontendController@updateQuantity')}}"
                                          enctype="multipart/form-data">
                                        @csrf
                                        @method('POST')
                                        <div class="d-flex">
                                            <input class="form-control form-control-sm w-50" type="number" name="quantity"
                                                   value="{{$item['quantity']}}"
                                                   min="1" max="100">
                                            <input class="form-control form-control-sm" type="hidden" name="id"
                                                   value="{{$item['product_id']}}">
                                            <button class="btn btn-primary  btn-sm mt-2 ml-3 my-auto" type="submit"><i class="fas
                                            fa-euro"></i>
                                                Update price
                                            </button>


                                        </div>
                                        <small class="text-muted">Item Subtotal:&euro;
                                            {{$item['product_price']*$item['quantity']}}</small>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <a class="text-center " data-toggle="tooltip" data-placement="bottom"
                           title="remove product"  href="{{route('removeItem', $item['product_id'])}}"><i
                                class="fas fa-times-circle fa-2x"></i></a>
                    </li>
                    @endforeach
                </ul>

                <div id="hoeveelBetalen" class="m-3">
                    <div>
                        <ul class="p-3 my-2">
                            <li class="d-flex">
                                <p>Subtotal</p>
                                <p class="ml-auto">&euro; {{Session::get('cart')
                ->totalPrice}}</p>
                            </li>
                            <li class="d-flex">
                                <p>Levering</p>
                                <p class="ml-auto">$0</p>
                            </li>
                            <li id="totaalBedrag" class="d-flex">
                                <p class="my-3">Total</p>
                                <p class="ml-auto my-3">&euro; {{Session::get('cart')
                ->totalPrice}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <p id="disclaimer" class="m-4">
                    Your personal data will be used to process your order, support
                    your experience throughout this website, and for other purposes
                    described in our privacy policy.
                </p>

                <div class="d-flex">

                    <a class="btn btn-primary my-auto w-50" id="backToShop" href="{{route('shop')}}">Verder winkelen</a>
                    <a href="{{route('payment')}}" id="bestelKnop" class="btn btn-primary my-auto w-50"><p class="mx-auto m-0
                    w-50">
                            Naar betalen
                        </p>

                    </a>
                </div>

                @endif
            </div>
        </div>
    </section>
@endsection

