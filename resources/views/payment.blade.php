@extends('layouts.front')

@section('content')
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Betalingen</div>

                    <div class="card-body">
                        <div class="my-3">Te betalen: €{{$cart->totalPrice}}</div>

                        <div id="paypal-button-container"></div>


                    </div>



                </div>
            </div>
        </div>
    </div>

    @endsection

