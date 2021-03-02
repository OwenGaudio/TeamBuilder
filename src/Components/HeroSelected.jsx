import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function HeroSelected({ data, removeCharacter, idx}) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src= {data.pose}/>
                <Button
                    onClick={() => removeCharacter(data.id)}
                    className="mt-auto font-weight-bold"
                    variant="danger"
                    block>
                        Remove from team
                </Button>
        </Card>
    )
}

export default HeroSelected;