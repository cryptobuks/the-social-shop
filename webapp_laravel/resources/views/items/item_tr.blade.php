<tr>
    <td>{{$item->name}}</td>
    <td>{{$item->typology->name}}</td>
    <td>{{$item->producer->name}}</td>
    <td>{{$item->vine->name}}</td>
    <td>{{$item->price}}</td>
    <td>
        <a href="{{ url ('items/'.$item->_id) }}">
            <button class="btn btn-info">Info</button>
        </a>
    </td>
    <td>
        <a href="{{ url ('items/delete/'.$item->_id) }}">
            <button class="btn btn-danger">X</button>
        </a>
    </td>
</tr>