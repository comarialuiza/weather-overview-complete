import React, { useContext } from 'react';
import { Container, WeekOverview, Day, Highlights, DayOverview, DayDetail, Progress } from './style';

import { WeatherContext } from '../../context/context';

export default function Info() {
    const [ weather ] = useContext(WeatherContext);

    return (
        <Container>
            { weather && 
                <>
                    <h3>Week</h3>
                    <WeekOverview>
                        { weather.daily.slice(0, 7).map(day => (
                            <>
                                <Day key={ day.sunrise }>
                                    <img src={`http://openweathermap.org/img/wn/${ day.weather[0].icon }.png`} alt="Weather"/>
                                    <p>
                                        <span className="dayMax">{ day.temp.max } °C</span> 
                                        <span className="dayMin">{ day.temp.min } °C</span>
                                    </p>
                                </Day>
                            </>
                        ))}
                    </WeekOverview>

                    <Highlights>
                        <h3>Today's Highlights</h3>
                        <DayOverview>
                            <DayDetail>
                                <p className="dayTitle">Feels like</p>
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.feels_like }</span> °C</p>
                            </DayDetail>

                            <DayDetail>
                                <p className="dayTitle">UV Index</p>
                                <Progress width={ weather.current.uvi * 10 } />
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.uvi }</span></p>
                            </DayDetail>

                            <DayDetail>
                                <p className="dayTitle">Wind Status</p>
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.wind_speed }</span>km/h</p>
                            </DayDetail>

                            <DayDetail>
                                <p className="dayTitle">Humidity</p>
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.humidity }</span> %</p>
                            </DayDetail>

                            <DayDetail>
                                <p className="dayTitle">Cloudiness</p>
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.clouds }</span> %</p>
                            </DayDetail>

                            <DayDetail>
                                <p className="dayTitle">Pressure</p>
                                <p className="dayInfo"><span className="mainInfo">{ weather.current.pressure }</span> hPa</p>
                            </DayDetail>
                        </DayOverview>
                    </Highlights>
                </>
            }
        </Container>
    );
}