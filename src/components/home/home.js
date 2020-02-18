import React from "react";
import { Row, Col, Card } from "react-materialize";

//import components
import UserProfile from "../user_profile/user_profile";
import Experience from "../experience/experience";

//import images
import company_avatar from "../../images/company.png";
import company_avatar2 from "../../images/company2.png";

const Home = () => (
  <Row>
    <Col m={3} s={12} className="avatar">
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">Sobre mim!!!!</h5>
      <Card>
        <div>
          <p>
            <b>Lorem</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <br />
          <p>
            <b>Ipsum</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </div>
      </Card>
      <h5 className="substitle">Experience</h5>

      <Experience
        title="Ruby Developer"
        company="Soundcloud"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={company_avatar}
      />
      <Experience
        title="React"
        company="Twitter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={company_avatar2}
      />
    </Col>
  </Row>
);

export default Home;
