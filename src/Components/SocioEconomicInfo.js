import React from 'react'
import { Card } from 'antd';
import '../Resources/countrypedia.css'
import { Col, Row } from 'antd'

function SocioEconomicInfo(props) {
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
                        <p>Infant Mortality rate(in %):{props.Data.infant_mortality}</p>
                        <p>Threatened Species:{props.Data.threatened_species} </p>
                        <p>forested area(in sq km):{props.Data.forested_area}</p>

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
                        <p>Internet Users(% of Population):{props.Data.internet_users}</p>
                        <p>Refugees:{props.Data.refugees}</p>
                        <p>Sex ratio(in %):{props.Data.sex_ratio}</p>
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
                        <p>Secondary School Enrollment rate(male):{props.Data.secondary_school_enrollment_male}</p>
                        <p>Secondary School Enrollment rate(female):{props.Data.secondary_school_enrollment_female}</p>
                        <p>Homicide Rate:{props.Data.homicide_rate}</p>
                    </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SocioEconomicInfo
