import React from "react";

import avatar from "../../images/avatar.png";
import { Card, Row, Col } from "react-materialize";

const UserProfile = () => (
  <Card>
    <Row>
      <Col s={8} m={8} offset="s2 m2">
        <img src={avatar} className="circle responsive-img" alt="avatar" />
      </Col>
    </Row>
    <Row>
      <h5>Marcus Pontes</h5>
      <p className="grey darken-2 white-text">Front end and Mobile developer</p>
    </Row>
  </Card>
);

export default UserProfile;
