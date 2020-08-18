<section class="mightlike-section mb-1">
        <div class="row">
            <div class="col-10 offset-1">

                <div class="card shadow">
                    <div class="card-header bg-dark text-white">
                        <h2>You might also like...</h2>
                    </div>
                    <div class="card-body row">
                        @foreach($mightAlsoLike as $product)
                            <div class="col-lg-3 col-12 d-flex justify-content-center mb-3">
                                <div class="card" style="width: 18rem;">
                                    <img src="{{$product->photo ? asset('/images/products/' . $product->photo->file) : "Geen foto
                                    momenteel"}}"
                                         class="card-img-top" alt="...">
                                    <div class="card-body d-flex flex-column justify-content-center ">
                                        <a href="{{route("home.product" , $product->name)}}" class="d-flex justify-content-center">
                                            <h4 class="card-title">{{$product->name}}</h4>
                                        </a>

                                        <h5 class="d-flex justify-content-center">€ {{$product->price}} </h5>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
</section>

