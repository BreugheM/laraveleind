{{--<div class="form-group">
    <label for="name_on_card">Name On Card</label>
    <input type="text" class="form-group" id="name_on_card" name="name_on_card" value="">
</div>

<div class="form-group">
    <label for="card-element">
        Credit or debit
    </label>
    <div id="card-element">
        stripe element komt hier
    </div>
    <div id="card-errors" role="alert">
        voor errors
    </div>
</div>


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
</form>--}}
<div class="panel panel-default credit-card-box">
    <div class="panel-heading display-table" >
        <div class="row display-tr" >
            <h3 class="panel-title display-td" >Payment Details</h3>
            <div class="display-td" >
                <img class="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png">
            </div>
        </div>
    </div>
    <div class="panel-body">

        @if (Session::has('success'))
            <div class="alert alert-success text-center">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                <p>{{ Session::get('success') }}</p>
            </div>
        @endif

        <form
            role="form"
            action="{{ route('stripe.post') }}"
            method="post"
            class="require-validation"
            data-cc-on-file="false"
            data-stripe-publishable-key="{{ env('STRIPE_KEY') }}"
            id="payment-form">
            @csrf

            <div class='form-row row'>
                <div class='col-xs-12 form-group required'>
                    <label class='control-label'>Name on Card</label> <input
                        class='form-control' size='4' type='text'>
                </div>
            </div>

            <div class='form-row row'>
                <div class='col-xs-12 form-group card required'>
                    <label class='control-label'>Card Number</label> <input
                        autocomplete='off' class='form-control card-number' size='20'
                        type='text'>
                </div>
            </div>

            <div class='form-row row'>
                <div class='col-xs-12 col-md-4 form-group cvc required'>
                    <label class='control-label'>CVC</label> <input autocomplete='off'
                                                                    class='form-control card-cvc' placeholder='ex. 311' size='4'
                                                                    type='text'>
                </div>
                <div class='col-xs-12 col-md-4 form-group expiration required'>
                    <label class='control-label'>Expiration Month</label> <input
                        class='form-control card-expiry-month' placeholder='MM' size='2'
                        type='text'>
                </div>
                <div class='col-xs-12 col-md-4 form-group expiration required'>
                    <label class='control-label'>Expiration Year</label> <input
                        class='form-control card-expiry-year' placeholder='YYYY' size='4'
                        type='text'>
                </div>
            </div>

            <div class='form-row row'>
                <div class='col-md-12 error form-group hide'>
                    <div class='alert-danger alert'>Please correct the errors and try
                        again.</div>
                </div>
            </div>

            <div class="row d-flex justify-content-center">
                <div class="col-xs-12 ">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Pay</button>
                </div>
            </div>

        </form>
    </div>
</div>
