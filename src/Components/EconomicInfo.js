import React from 'react'
import { Card, Col, Row } from 'antd';
import '../Resources/countrypedia.css'

function EconomicInfo(props) {
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
                            <p>GDP(in Trillion USD):{props.Data.gdp / 1000000}</p>
                            <p>GDP Growth(in %):{props.Data.gdp_growth} </p>
                            <p>Exports(in Trillion USD):{props.Data.exports / 1000000}</p>

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
                            <p>Imports(in Trillion USD):{props.Data.imports / 1000000}</p>
                            <p>Population employed in Services industry(as % of total population):{props.Data.employment_services}</p>
                            <p>Population employed in Manufacturing industry(as % of total population):{props.Data.employment_industry}</p>
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
                            <p>Population employed in Agriculture industry(as % of total population):{props.Data.employment_agriculture}</p>
                            <p>Urban Population(as% of total population):{props.Data.urban_population}</p>
                            <p></p>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default EconomicInfo
