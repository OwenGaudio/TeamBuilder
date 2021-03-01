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
          <div class = "panel panel-default">
           <div class = "panel-body">
            <div class="d-flex justify-content-center"> Have you ever had trouble remembering the meta? Well then, welcome to the Overwatch Team Builder! On this site you can create your own Overwatch team! You can browse through available heroes, which are updated regularly, and add specific ones to your team! Then you can view your selected team. You can even text your created team to yourself, a teammate, or coach!! And don’t worry about role restrictions, this was created to be used by open que and competitive players alike. Subscribe to our newsletter to stay up to date on new features and Overwatch 2 content. And sorry, the site will not force people to play your amazing chosen team composition.
            </div>
           </div>
            <div class="d-flex justify-content-center">
               <Button type="button" class="newsletter">Get Newsletter</Button>
            </div>
          </div>
        </Container>
    </div>
  );
}

export default Home;