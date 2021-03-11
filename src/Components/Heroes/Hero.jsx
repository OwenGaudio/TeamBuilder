import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Hero({ data, displayConfirmation }) {
    function handleAddMember(name){
        axios.post(`/api/team/${data.id}`)
        .then(res => {
            console.log(res.data)
        }).catch( err => alert(err.response.data))

        displayConfirmation(name)
    }


    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src= {data.image}/>
            <Card.Body className = "d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className ="mb-1" vairant="primary">
                        {data.role}
                    </Badge>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    onClick={() => handleAddMember(data.name)}
                    className="mt-auto font-weight-bold"
                    block>
                        Add To Team
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Hero;