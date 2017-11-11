@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Items</div>

                <div class="panel-body">

                    <div class="col-sm-3">

                        <img src="{{$item->img}}" class="img-responsive">

                    </div>

                    <div class="col-sm-8 col-sm-offset-1">
                        
                        <dl class="row" style="font-size: 18px;">
                          <dt class="col-sm-3">Nome</dt>
                          <dd class="col-sm-9">{{$item->name}}</dd>

                          <dt class="col-sm-3">Descrizione</dt>
                          <dd class="col-sm-9">{{$item->desc}}</dd>

                          <dt class="col-sm-3">Produttore</dt>
                          <dd class="col-sm-9">{{$item->producer->name}}</dd>

                          <dt class="col-sm-3">Vitigno</dt>
                          <dd class="col-sm-9">{{$item->vine->name}}</dd>

                          <dt class="col-sm-3">Gradazione</dt>
                          <dd class="col-sm-9">{{$item->gradation}} %</dd>

                          <dt class="col-sm-3">Tipologia</dt>
                          <dd class="col-sm-9">{{$item->typology->name}}</dd>

                          <dt class="col-sm-3">Anno</dt>
                          <dd class="col-sm-9">{{$item->year}}</dd>

                          <dt class="col-sm-3">Nazionalità</dt>
                          <dd class="col-sm-9">{{$item->nationality->name}}</dd>

                          <dt class="col-sm-3">Regione</dt>
                          <dd class="col-sm-9">{{$item->region->name}}</dd>

                          <dt class="col-sm-3">Price</dt>
                          <dd class="col-sm-9">€ {{$item->price}}</dd>

                          <dt class="col-sm-3">Olfatto</dt>
                          <dd class="col-sm-9">{{$item->smell->name}}</dd>

                          <dt class="col-sm-3">Gusto</dt>
                          <dd class="col-sm-9">{{$item->taste->name}}</dd>

                          <dt class="col-sm-3">Vista</dt>
                          <dd class="col-sm-9">{{$item->view->name}}</dd>
                        </dl>
                    
                    </div>

                    
                </div>

            </div>
        </div>
    </div>
</div>


@endsection
