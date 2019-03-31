import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import './myMap.css';

const MyMap = (props) => (
    <YMaps>
        <Map state={props.mapState} className='mymap'>
            {props.coordinates.map(coordinate => <Placemark key={coordinate[0]} geometry={coordinate} />)}
        </Map>
    </YMaps>
)

export default MyMap
