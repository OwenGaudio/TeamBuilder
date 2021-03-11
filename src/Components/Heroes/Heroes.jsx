import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Hero  from './Hero';
import { Confirmation } from './Confirmation'
import "./HeroStyling.scss";
import axios from 'axios';

function Heroes() {
    const [heroes, setHeroes] = useState([])
    const [ordered, setOrdered] = useState(false)
    const [name, setName] = useState("")

    function displayConfirmation(hero) {
      setOrdered(true);
      setName(hero)

      setTimeout(() => {
        setOrdered(false);
      }, 5000);
    }

    useEffect(() => {
      displayHeroes()
    },[])

    function displayHeroes(){
      axios.get('/api/heroes')
      .then( res => {
        setHeroes(res.data)
      }).catch( err => console.log(err))
    }
  
    return (
       <Container>
         {ordered && <Confirmation name={name} toggle={setOrdered}/>}
          <Row>
            {heroes.map(data => (
              <Col xs={6} sm={6} md={4} lg={3} xl={3} className="mb-5" key={`${data.id}`}>
                <Hero data={data} displayConfirmation={displayConfirmation}/>
             </Col>
           ))}
         </Row>
        </Container>
    );
}

export default Heroes;