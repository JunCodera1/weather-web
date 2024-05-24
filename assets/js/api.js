'use strict';

const api_key ="e4d474a322c0877f50ad1ce9bfa13d83";

/**
 *
 * @param {string} URL API URL
 * @param {Function} callback callback
 */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
      .then((res) => res.json())
      .then((data) => callback(data));
  };
  
  export const url = {
    currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
  
    /**
     *
     * @param {string} query Search Query E.G.: "London", "Philadelphia"
     * @returns
     */
  
    geo(query) {
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    },
  };