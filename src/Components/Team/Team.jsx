import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import HeroSelected  from './HeroSelected';
import "./TeamStyling.scss";
import image from './teambackground.png';
import axios from 'axios';
import Form from "./TextForm";

var sectionStyle = {
   backgroundImage: `url(${image})`
}

function Team() {
  const [team,setTeam] = useState([])

  useEffect(() => {
    displayTeam()
  },[])

  function displayTeam(){
    axios.get('/api/team')
    .then( res => {
      setTeam(res.data)
    }).catch( err => console.log(err))
  }

  function removeCharacter(idx){
  axios.delete(`/api/team/${idx}`)
    .then(res => {
      setTeam(res.data)
    }).catch( err => console.log(err))
  }

  function sendText(number,team){
    let namesArray = []

    for(let i = 0; i < team.length; i++){
      namesArray[i] = team[i].name
   }
  
    const names = namesArray.join("\n")

    axios.post('/api/text', {number,names})
    .then(res => {
      console.log(res)
    }).catch( err => console.log(err))
}

  return (
    <div style={sectionStyle}>
      <Container className= "team">
        <Row>
          {team.map((data, idx) => (
            <Col xs={6} sm={6} md={4} lg={4} xl={4} className="mb-5" key={`${data.id}`}>
              <HeroSelected data={data} removeCharacter={removeCharacter} idx={idx}/>
            </Col>
          ))}
       </Row>
        <div className="d-flex justify-content-center">
         <Form sendText={sendText} team={team}/>
        </div>
      </Container>
     </div>
 );
}

export default Team;