import React from 'react';

const WeatherForm = props => {
    return (
        <div className="card card-body mx-auto">
            <h1>
                <strong>Weather APP</strong>
            </h1>
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Enter a City" className="form-control" autoFocus />
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Enter a Country" className="form-control" />
                </div>
                <button className="btn btn-success btn-block">
                    START
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;