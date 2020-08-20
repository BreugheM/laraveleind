@extends('layouts.admin')
@section('title')
    All Colors
@endsection
@section('content')
    <div class="col-12">
        <h1 class="text-primary">All Colors</h1>
    </div>
    <div class="col-12">
        <a href="{{route('colors.create')}}" class="btn btn-outline-primary btn-sm border-left-primary">
            <i class="fas fa-plus-circle"></i>
            Add color
        </a>
    </div>

    <div class="col-12 mt-3">
        <table class="table table-bordered table-hover table-sm shadow rounded" id="categories-table">
            <thead class="bg-primary text-white">
            <tr>
                <th scope="row">Id</th>
                <th scope="row">ColorName</th>
                <th scope="row">hexColor</th>
                <th scope="row">hexColor</th>
                <th scope="row">Created At</th>
                <th scope="row">Updated At</th>
                <th scope="row">Delete </th>
            </tr>
            </thead>

            <tbody>
            @if($colors)
                @foreach($colors as $color)
                    <tr>
                        <td>{{$color->id}}</td>
                        <td>
                            <a href="{{route('colors.edit', $color->id)}}">{{$color->colorName}}</a>
                        </td>
                        <td>{{$color->hexColor}}</td>
                        <td class="d-flex justify-content-center">
                            <i class="fas fa-circle fa-2x" style="color:{{$color->hexColor}}"></i>
                        </td>
                        <td>{{$color->created_at}}</td>
                        <td>{{$color->updated_at}}</td>
                        <td>
                            <form method="POST" action="{{action('AdminColorsController@destroy', $color->id)}}"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('DELETE')
                                <div class="form-group">
                                    <button type="submit" class="rounded-pill btn btn-outline-danger"><i class="fas fa-trash"></i>
                                        Delete color
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
