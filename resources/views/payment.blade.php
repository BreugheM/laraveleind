@extends('layouts.front')

@section('content')
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Betalingen</div>

                    <div class="card-body">

                        <!-- Display a payment form -->
                        <form id="payment-form">
                            <div id="card-element"><!--Stripe.js injects the Card Element--></div>
                            <button id="submit">
                                <div class="spinner hidden" id="spinner"></div>
                                <span id="button-text">Pay</span>
                            </button>
                            <p id="card-error" role="alert"></p>
                            <p class="result-message hidden">
                                Payment succeeded, see the result in your
                                <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to pay again.
                            </p>
                        </form>

                    </div>



                </div>
            </div>
        </div>
    </div>
    @endsection

