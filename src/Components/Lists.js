import React from 'react'
import { Tabs } from 'antd';
import GenInfo from './GenInfo.js';
import SocioEconomicInfo from './SocioEconomicInfo.js';
import EconomicInfo from './EconomicInfo.js';
function Lists(props) {
    let countryName=props.Data.name;
    let capCountryName=countryName.toUpperCase();
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `General Information`,
            children: <GenInfo Data={props.Data}></GenInfo>,
        },
        {
            key: '2',
            label: `Socio-Environmental Information`,
            children: <SocioEconomicInfo Data={props.Data}></SocioEconomicInfo>,
        },
        {
            key: '3',
            label: `Economic Information`,
            children: <EconomicInfo Data={props.Data}></EconomicInfo>,
        },
    ];
    return (
        <div className='lists'>
            <h2>{capCountryName}</h2>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default Lists
