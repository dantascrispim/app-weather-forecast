import { useState, useRef} from 'react';
import './App.css'
import axios from 'axios';
import WeatherInfo from './components/WeatherInfomations/weatherInfo';
import WeatherInfomations5Days from './components/WeatherInfomations5Days/WeatherInfomations5Days'

  function App() {
    const [weather, setWeather] = useState()

    const [weather5Days, setWeather5Days] = useState()
    
    const inputRef = useRef()

  async function searchCity() {
    console.log(inputRef.current.value)

    const city = inputRef.current.value
    const key = "a6ed5bb3a8ccd6c287c62fd7716b5ae5"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5days)


    

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
    

    

  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={ inputRef } type='text' placeholder='Digite o nome da cidade' />
      <button onClick={ searchCity }>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfomations5Days weather5Days={weather5Days}/>}

      
    </div>
  )
}

export default App;
