import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import HeroSelected  from './HeroSelected';
import "./HeroStyling.scss";
import initialTeam from "./selected.json";
import image from './teambackground.jpg';

var sectionStyle = {
   backgroundImage: `url(${image})`
}

function Team() {

  const [team,setTeam] = useState([])
  useEffect(() => {
    setTeam(initialTeam)
  },[])

  function removeCharacter(idx){
    const newTeam = [...team]
    newTeam.splice(idx,1)
    setTeam(newTeam)
  }

  return (
    <div style={sectionStyle}>
    <Container>
       <Row>
         {team.map((data, idx) => (
           <Col xs={6} sm={6} md={4} lg={4} xl={4} className="mb-5" key={`${data.id}`}>
             <HeroSelected data={data} removeCharacter={removeCharacter} idx={idx}/>
          </Col>
        ))}
      </Row>
     </Container>
     </div>
 );
}

export default Team;