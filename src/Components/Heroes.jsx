import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Hero  from './Hero';
import { Confirmation } from './Confirmation'
import heroes  from "./data.json"

function Heroes() {
    const [ordered, setOrdered] = useState(false)

    function displayConfirmation() {
      setOrdered(true);
  
      setTimeout(() => {
        setOrdered(false);
      }, 3000);
    }
  
    return (
       <Container>
         {ordered && <Confirmation toggle={setOrdered}/>}
          <Row>
            {heroes.map(data => (
              <Col xs={6} sm={6} md={4} lg={3} xl={3} className="mb-5" key={`${data.id}`}>
                <Hero data={data} setOrdered={displayConfirmation}/>
             </Col>
           ))}
         </Row>
        </Container>
    );
}

export default Heroes;