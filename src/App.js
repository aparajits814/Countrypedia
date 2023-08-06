import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Lists from './Components/Lists';
import axios from 'axios';
import { Spin, message } from 'antd';

function App() {
  const data = {
    "gdp": 20580223.0,
    "sex_ratio": 97.9,
    "surface_area": 9833517.0,
    "life_expectancy_male": 76.3,
    "unemployment": 3.9,
    "imports": 2567490.0,
    "homicide_rate": 5.0,
    "currency": {
      "code": "USD",
      "name": "Us Dollar"
    },
    "iso2": "US",
    "employment_services": 79.0,
    "employment_industry": 19.7,
    "urban_population_growth": 0.9,
    "secondary_school_enrollment_female": 98.7,
    "employment_agriculture": 1.3,
    "capital": "Washington, D.C.",
    "co2_emissions": 4761.3,
    "forested_area": 33.9,
    "tourists": 79746.0,
    "exports": 1644280.0,
    "life_expectancy_female": 81.3,
    "post_secondary_enrollment_female": 102.0,
    "post_secondary_enrollment_male": 75.0,
    "primary_school_enrollment_female": 101.4,
    "infant_mortality": 5.8,
    "gdp_growth": 2.9,
    "threatened_species": 1655.0,
    "population": 331003.0,
    "urban_population": 82.5,
    "secondary_school_enrollment_male": 99.2,
    "name": "United States",
    "pop_growth": 0.6,
    "region": "Northern America",
    "pop_density": 36.2,
    "internet_users": 87.3,
    "gdp_per_capita": 62917.9,
    "fertility": 1.8,
    "refugees": 1043.2,
    "primary_school_enrollment_male": 102.2
  }
  const [Data, setData] = useState(data);
  const [text, settext] = useState("Enter City Name");
  const [loading, setLoading] = useState(false);
  const onClick = async (txt, loading, setLoading) => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/country?name=${txt}`,
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    };

    await axios.request(options).then(function (response) {
      if(response.data.length===1){
        setData(response.data[0]);
        message.success('Search successful!');
      }else{
        message.error('Enter Valid Country name');
      }
    }).catch(function (error) {
      console.error(error);
      message.error('Search failed');
    });
    setLoading(false);
  }
  return (

    <>
      <Navbar onClick={onClick} text={text} settext={settext} loading={loading} setLoading={setLoading}></Navbar>
      {loading && <Spin></Spin>}
      <Lists Data={Data}></Lists>

    </>
  );
}

export default App;
