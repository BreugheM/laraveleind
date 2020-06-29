@extends('layouts.front')
@section('title')
    Contact
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
                        <div class="list-group-item">Reviews</div>
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
    <section id="contact1" class="container-fluid py-4">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="row">
                    <div class="col-md-6 ml-2 ml-md-0 ">
                        <div>
                            <h2>
                                Get in Touch!
                            </h2>
                            <h3>Its Free!</h3>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 col-lg-4 p-3 ml-2 ml-md-0">
                        <p class="eyebrow">find us</p>
                        <p>Stationstraat 123 <br>
                            Murdegem 4567 <br>
                            <i class="fas fa-phone-alt"></i> +12345 67 89 01</p>
                    </div>
                    <div class="col-md-5 col-lg-4 p-3 ml-2 ml-md-0">
                        <p class="eyebrow">Contact us</p>
                        <p><i class="fas fa-phone-alt"></i> +54321 67 45 35<br>
                            <i class="fas fa-at"></i> email@madeup.com
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </section>
    <section id="map" class="p-0 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.7799268269755!2d3.0972594156351017!3d50.94628287954684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c335bceb4d0467%3A0xa4ec8ad74209fbc5!2sSyntra%20West!5e0!3m2!1snl!2sbe!4v1580296405318!5m2!1snl!2sbe"  style="border:0;" allowfullscreen=""></iframe>
    </section>
    <section id="inTouch" class="container-fluid ">
        <div class="row pt-4">
            <div class="col-lg-4">
                <h2>
                    <b>Get in touch</b>
                    with us by filling out our contact form.
                </h2>
                <p>We don't spam we promise!</p>
            </div>
            <div class="col-lg-8 ">
                <form action="{{action('ContactController@store')}}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="contact-name">Your name</label>
                            <input type="text" id="contact-name" name="name" placeholder="Your name" class="form-control">
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="contact-email">email</label>
                            <input type="email" id="contact-email" placeholder="email" name="email" class="form-control" required>
                        </div>
                        {{--<div class="form-group col-12">
                            <label for="subject">Subject</label>
                            <input type="text" placeholder="subject" class="form-control" id="subject">
                        </div>--}}
                        <div class="form-group col-12">
                            <label for="message">Message</label>
                            <textarea rows="3" placeholder="Put your message here" class="form-control" name="message"
                                      id="message"></textarea>
                        </div>
                        <div id="btnContact" class="col-12 mt-3 mb-5">
                            <button type="submit" id="btnSend">Send message</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    </section>
@endsection
