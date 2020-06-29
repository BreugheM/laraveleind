@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                        <a href="{{route('index')}}" class="btn btn-primary btn-lg d-flex justify-content-center">You are logged in!
                            return to site</a>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
