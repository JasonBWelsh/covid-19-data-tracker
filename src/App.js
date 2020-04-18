import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [globalData, setGlobalData] = useState({});
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      const response = await axios.get(apiUrl);
      const countriesResponse = await axios.get(`${apiUrl}/countries`);
      setGlobalData(response.data);
      setCountries(countriesResponse.data);
      setIsloading(false);
    };
    fetchData();
  }, []);

  const apiUrl = 'https://covid19.mathdro.id/api';
  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>Confirmed: {globalData.confirmed.value}</div>
          <div>Recovered: {globalData.recovered.value}</div>
          <div>Deaths: {globalData.deaths.value}</div>
        </>
      )}
    </div>
  );
}

export default App;
