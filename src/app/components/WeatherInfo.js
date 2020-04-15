import React from 'react';

const WeatherInfo = props => {

    console.log(props);

    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> <strong> Location:</strong> {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> <strong> Temperature:</strong> {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> <strong> Humidity:</strong> {props.humidity}%</p>
                    }
                    {
                        props.pressure &&
                        <p><i class="fas fa-sort-amount-down"></i> <strong> Pressure:</strong> {props.pressure} hPa</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> <strong> Wind Speed:</strong> {props.wind_speed}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
        </div>
    )
}

export default WeatherInfo;