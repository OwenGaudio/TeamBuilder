import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import HeroSelected  from './HeroSelected';
import "./HeroStyling.scss";
import team from "./selected.json";

function Team() {
  return (
    <Container>
       <Row>
         {team.map(data => (
           <Col xs={3} sm={3} md={4} lg={4} xl={4} className="mb-5" key={`${data.id}`}>
             <HeroSelected data={data}/>
          </Col>
        ))}
      </Row>
     </Container>
 );
}

export default Team;