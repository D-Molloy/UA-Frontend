import React from 'react';

import { Col, Row } from 'react-bootstrap';
import {styles} from '../../../../assets/styles/variables'

const HoursWorked = (props) => (
    <Col lg={3} sm={6}>
        { /* START widget */}
        <div className="panel widget bg-primary green">
            <Row className="row-table">
                <Col xs={4} className="text-center pv-lg" style={styles.secondaryDark}>
                    <em className="icon-check fa-3x darkgreen"></em>
                </Col>
                <Col xs={8} className="pv-lg" style={styles.secondary}>
                    <div className="h2 mt0">370
                    </div>
                    <div className="text-uppercase">Hrs</div>
                    <div className="text-uppercase">Worked</div>
                </Col>
            </Row>
        </div>
    </Col>
)

export default HoursWorked;

