import React from 'react'
import { Card } from 'antd';
import '../Resources/countrypedia.css'
import { Col, Row } from 'antd'
function GenInfo(props) {
    return (
        <>
            <Row>
                <Col xs={24} lg={8} md={8} sm={24}>
                    <div className="card">
                        <Card
                            style={{
                                width: 400,
                                height: 300
                            }}
                        >
                            <p>Capital City:{props.Data.capital}</p>
                            <p>Surface Area(in km square):{props.Data.surface_area} </p>
                            <p>Region:{props.Data.region}</p>

                        </Card>
                    </div>
                </Col>
                <Col xs={24} lg={8} md={8} sm={24}>
                    <div className="card">
                        <Card
                            style={{
                                width: 400,
                                height: 300
                            }}
                        >
                            <p>Currency:{props.Data.currency.name}({props.Data.currency.code})</p>
                            <p>Population(In Crores):{props.Data.population / 10000}</p>
                            <p>Population Growth(in %):{props.Data.pop_growth}</p>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} lg={8} md={8} sm={24}>
                    <div className="card">
                        <Card
                            style={{
                                width: 400,
                                height: 300
                            }}
                        >
                            <p>Life Expectancy(Males,in years):{props.Data.life_expectancy_male}</p>
                            <p>Life Expectancy(Females,in years):{props.Data.life_expectancy_female}</p>
                            <p></p>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default GenInfo
