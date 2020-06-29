@component('mail::message')
    <h1>Message from website</h1>
    <p>Name:</p>{{$data['name']}}
    <p>email:</p>{{$data['email']}}
    <p>Message:</p>{{$data['message']}}
@endcomponent
