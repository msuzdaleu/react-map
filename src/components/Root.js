import React, { Component } from 'react';
import '../index.css';
import Button from './button/button';
import Header from './header/header';
import MyMap from './myMap/myMap';
import { Input } from '@material-ui/core';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            mapData: {
                center: [55.751574, 37.573856],
                zoom: 7,
            },
            coordinates: [
                [55.684758, 37.738521]
            ],
            isError: false
        };
    }

    handleSearch = (e) => {
        e.preventDefault();
        const latitude = this.latitude.value;
        const longitude = this.longitude.value;
        const isError = !(latitude && !isNaN(latitude) && longitude && !isNaN(longitude))
        if (isError) {
            this.setState({ isError });
        } else {
            this.setState({
                mapData: {
                    center: [latitude, longitude],
                    zoom: 7,
                },
                coordinates: [
                    [latitude, longitude]
                ],
                isError: false
            });
        }
    };

    render() {
        const buttonTitle = 'load coordinates';
        const mainComponent = <MyMap mapState={this.state.mapData} coordinates={this.state.coordinates} />

        return (
            <div>
                <Header />
                {mainComponent}
                <form onSubmit={this.handleSearch} className="form-input">
                    <Input placeholder="Enter a latitude"
                        className="input-style"
                        inputRef={latitude => this.latitude = latitude}
                        type="text"
                        error={this.state.isError}
                    />
                    <Input placeholder="Enter a longitude"
                        className="input-style"
                        inputRef={longitude => this.longitude = longitude}
                        type="text"
                        error={this.state.isError}
                    />
                    <Button onClick={this.handleSearch} title={buttonTitle} />
                </form>
            </div>
        );
    }
}

export default Root;