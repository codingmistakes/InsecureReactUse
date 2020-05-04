import React, { Component } from 'react';
import dompurify from 'dompurify';
import './custom.css'

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    // we can make use of https://github.com/cure53/DOMPurify here
    // to sanitize the HTML using whitelists.
    //var input = dompurify.sanitize(input);

    static markup(input) {
        return { __html: input };
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Status</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.name}>
                            <td>{forecast.name}</td>
                            <td>{forecast.main}</td>
                            <td>{forecast.temp}</td>
                            <td dangerouslySetInnerHTML={Home.markup(forecast.description)}></td>
                            <td dangerouslySetInnerHTML={Home.markup('<a href='+forecast.link+'>Detail</a>')}></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderForecastsTable(this.state.forecasts);

        return (
            <div className="centeralize">
                <center>
                    <h1 id="tableLabel" >How is the weather @ your favorite cities?</h1>
                    <p>Weather data at your fingertips...</p>
                </center>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast/fetch');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
