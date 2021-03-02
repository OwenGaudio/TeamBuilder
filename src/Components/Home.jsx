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
          <div className= "panel panel-default">
           <div className= "panel-body">
            <div className="d-flex justify-content-center"> Have you ever had trouble remembering the meta? Well then, welcome to the Overwatch Team Builder! On this site you can create your own Overwatch team! You can browse through available heroes, which are updated regularly, and add specific ones to your team! Then you can view your selected team. You can even text your created team to yourself, a teammate, or coach!! And don’t worry about role and character restrictions, this was designed to be used in all game modes. Subscribe to our newsletter to stay up to date on new features and Overwatch 2 content. And sorry, the site will not force people to play your amazing chosen team composition.
            </div>
           </div>
            <div className="d-flex justify-content-center">
               <Button type="button" className="newsletter">Get Newsletter</Button>
            </div>
          </div>
        </Container>
    </div>
  );
}

export default Home;