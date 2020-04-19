import React, { useContext, useState } from 'react';
import axios from 'axios';

import { WeatherContext } from '../../context/context';
import { Container, Today } from './style';

import { FiSearch } from 'react-icons/fi';

import Loading from '../Loading';
import Error from '../Error';

export default function Menu() {
    const [ weather, setWeather ] = useContext(WeatherContext);
    const [ weatherToday, setWeatherToday ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    const tokenCoord = '1a2cbde2cb168e';
    const tokenTemp = '90a6a32ef837946def16d922074d4fc7'

    const getWeatherInfo = async(e) => {
        try {
            setLoading(true);
            setError(false);

            /* Initial */
            e.preventDefault();

            /* Get city name */
            const city = e.target.elements.city.value;

            /* Get city coordinates */
            const resCoord = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${tokenCoord}&q=${city}&format=json`);
            const lat = resCoord.data[0].lat;
            const lon = resCoord.data[0].lon;

            /* Get city temperature */
            const resTemp = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${tokenTemp}`);
            console.log(resTemp);
            
            const data = resTemp.data;
            
            const today = resTemp.data.current;

            setWeather(data);
            setWeatherToday(today);

            setLoading(false);
        } catch(err) {
            setLoading(true);
            setError(true);
            console.log(err);
            setLoading(false);
        }
    }

    return (
        <Container> 
            <form onSubmit={ getWeatherInfo }>
                <input type="text" placeholder="Search for places..." name="city" />
                <button type="button"><FiSearch /></button>
            </form>

            { loading && <Loading /> }

            { error && <Error />}

            <Today>
                { weatherToday && !loading && !error &&
                    <>
                        <img src={`http://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@2x.png`} alt="Weather"/> 
                        <p className="temperatureContainer">
                            <span className="temperature">{ weatherToday.temp }</span>
                            <span className="temperatureCelsius">°C</span>
                        </p>
                        <p className="weatherDescription">{ weatherToday.weather[0].main }</p>
                    </>
                }
            </Today>
        </Container>
    );
}