@extends('layouts.admin')
@section('title')
    ALL REVIEWS
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Reviews</h1>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="brands-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">Author</th>
                <th scope="row">ReviewBody</th>
                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($reviews)
                @foreach($reviews as $review)
                    <tr>
                        <td>{{$review->id}}</td>
                        <td>{{$review->user->name}}</td>
                        <td>{{$review->reviewBody}}</td>
                        <td>{{$review->created_at}}</td>
                        <td>{{$review->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminReviewsController@destroy', $review->id)}}"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger mb-1"><i class="fas fa-trash"></i>
                                        Delete
                                    </button>
                                </div>

                            </form>
                        </td>
                    </tr>
                @endforeach
            @endif
            </tbody>
        </table>

    </div>
@endsection
