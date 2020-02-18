import React from "react";

import avatar from "../../images/avatar.png";
import Card from "react-materialize/lib/Card";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";

const UserProfile = () => (
  <Card>
    <Row>
      <Col s={8} m={8} offset="s2 m2">
        <img src={avatar} className="circle responsive-img" />
      </Col>
    </Row>
    <Row>
      <h5>Marcus Pontes</h5>
      <p className="grey darken-2 white-text">Front end and Mobile developer</p>
    </Row>
  </Card>
);

export default UserProfile;
