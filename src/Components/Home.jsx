import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import "./HomeStyling.scss"

function Home() {
  return (
    <div>
        <Jumbo className="jumbo">
            <div className="overlay"></div>
             <Container>
                <h1>Welcome</h1>
            </Container>
        </Jumbo>

        <Container classname="main">
            <p>yo yo yo</p>
            <Button>Get Newsletter</Button>
        </Container>
    </div>
  );
}

export default Home;