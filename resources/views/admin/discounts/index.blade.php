@extends('layouts.admin')
@section('title')
    All Discounts
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Discounts</h1>
    </div>
    <div class="col-12">
        <a href="{{route('discounts.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Create discount
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="discounts-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">Name</th>
                <th scope="row">description</th>
                <th scope="row">Percent</th>
                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($discounts)
                @foreach($discounts as $discount)
                    <tr>
                        <td>{{$discount->id}}</td>
                        <td>
                            <a href="{{route('discounts.edit', $discount->id)}}">{{$discount->name}}</a>
                        </td>
                        <td>{{$discount->description}}</td>
                        <td>{{$discount->percent}}</td>
                        <td>{{$discount->created_at}}</td>
                        <td>{{$discount->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminDiscountsController@destroy', $discount->id)}}"
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
