<section id="reviews" class="container-fluid my-4 d-none d-lg-block">
    <div class="row bg-white">
        <article class="col-10 offset-1 d-flex flex-column justify-content-center my-5">
            <div class="d-flex justify-content-center">
                <header>
                    <h2>What Our Customers Have To Say</h2>
                    <p class="subtekst">Couple Of Words About This Story Section</p>
                </header>
            </div>

            <div class="row">
                <div class="col-lg-10 offset-1">
                    <div class="row my-4">
                        @if(count($frontReviews)>0)
                            @foreach($frontReviews as $frontReview)
                                <div class="col-lg-4">
                                    <div class="d-flex">
                                        <img class="fotosreviews rounded-circle" src="{{$frontReview->user->photo ? asset('/images/userimg/' .
                                $frontReview->user->photo->file) :
                                "http:/placehold
                            .it/62x62"}}" alt="">
                                        <div class="ml-1">
                                            <h3 class="titelsreviews my-0">{{$frontReview->user->name}}</h3>
                                            <h4 class="ondertitelsreviews">{{$frontReview->user->role->name}}</h4>
                                        </div>
                                    </div>
                                    <p class="tekstreviews">{{$frontReview->reviewBody}}</p>
                                </div>
                            @endforeach
                        @elseif(count($frontReviews)==0)
                            <div class="card text-center shadow w-50 mx-auto">
                                <div class="card-header bg-dark">

                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">No reviews yet... Be the first!</h5>
                                    <a href="{{route('reviews')}}" class="btn btn-primary">Write a review</a>
                                </div>
                            </div>
                        @endif
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
                    @if(count($frontReviews)>0)
                        @foreach($frontReviews as $frontReview)
                            <div class="carousel-item @if($loop->first) active @endif ">
                                <div class="col-lg-4 mt-3 mt-lg-0 mx-auto">
                                    <div class="d-flex">
                                        <img class="fotosreviews rounded-circle" src="{{$frontReview->user->photo ? asset('/images/userimg/' .
                                $frontReview->user->photo->file) :
                                "http:/placehold
                            .it/62x62"}}" alt="">
                                        <div class="ml-1">
                                            <h3 class="titelsreviews my-0">{{$frontReview->user->name}}</h3>
                                            <h4 class="ondertitelsreviews">{{$frontReview->user->role->name}}</h4>
                                        </div>
                                    </div>
                                    <p class="tekstreviews">{{$frontReview->reviewBody}}</p>
                                </div>
                            </div>
                        @endforeach
                    @elseif(count($frontReviews)==0)
                        <div class="card text-center shadow mx-auto">
                            <div class="card-header bg-dark">

                            </div>
                            <div class="card-body">
                                <h5 class="card-title">No reviews yet... Be the first!</h5>
                                <a href="{{route('reviews')}}" class="btn btn-primary">Write a review</a>
                            </div>
                        </div>
                    @endif
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
