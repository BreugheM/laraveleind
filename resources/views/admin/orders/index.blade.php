@extends('layouts.admin')
@section('title')
    All Orders
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Orders</h1>
    </div>
    <div class="col-12">
        <a href="{{route('brands.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Create Brand
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="brands-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">First Name</th>
                <th scope="row">Last Name</th>
                <th scope="row">streetname</th>
                <th scope="row">street nr</th>
                <th scope="row">zipcode </th>
                <th scope="row">city </th>
                <th scope="row">cell nr </th>
                <th scope="row">remarks </th>
                <th scope="row">products </th>
                <th scope="row">price </th>
            </tr>
            </thead>

            <tbody>
            @if($orders)
                @foreach($orders as $order)
                    <tr>
                        <td>{{$order->id}}</td>
                        <td>{{$order->first_name}}</td>
                        <td>{{$order->last_name}}</td>
                        <td>{{$order->street_name}}</td>
                        <td>{{$order->street_nr}}</td>
                        <td>{{$order->zip_code}}</td>
                        <td>{{$order->city}}</td>
                        <td>{{$order->cell_nr ? $order->cell_nr : "/"}}</td>
                        <td>{{$order->remarks ? $order->remarks : "/"}}</td>

                        <td>
                            @foreach($order->products as $product)
                                {{$product->name ? $product->name  : '/' }}
                            @endforeach
                        </td>
                        <td>{{$order->totalPrice}}</td>
                        <td>
                            <form method="POST" action=""
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger"><i class="fas fa-trash"></i>
                                        Delete Order
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
