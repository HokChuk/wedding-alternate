import React from "react";
import { Container, Row } from 'react-bootstrap';
import Column from 'react-bootstrap/Col';
import Schedule from './Schedule';
import Story from './Story';
import "../styles/App.css";

function Homepage() {
    return (
      <Container fluid>
      <Row>
      <div className="container-fluid homepage-bgimage">
        <div id="wedHome" >  
          <Column className="pmt mt-8">
            <h1>James &amp; Apple</h1>
            <h3>Saturday, February 8, 2025</h3>
          </Column>
          {/* <Column className="mt-5">&nbsp;&nbsp;
            <h3>Saturday, February 8, 2025 | Chapel On The Hill</h3>
          </Column> */}
        </div>
      </div>
      </Row>
      <Row>
        <div id="story">
          <Column className="marginHeader">
            <h2>Our Story</h2>
          </Column>
        </div>
      </Row>
      <Row>
          <Column className="marginHeader">
            <Story />
          </Column>
      </Row>
      <Row>
        <div id="getthere">
          <Column className="marginHeader">
            <h2>Getting There</h2>
          </Column>
        </div>
      </Row>
      <Row>
          <Column className="marginHeader"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15481.335335512991!2d120.8360742!3d14.0574537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9c26637ae0a1%3A0x469e957a8a28f790!2sDon%20Bosco%20Chapel%20on%20the%20Hill!5e0!3m2!1sen!2sph!4v1730958591454!5m2!1sen!2sph" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Column>
          <Column className="marginHeader"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.254550049715!2d120.93256967553762!3d14.121122188634866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd77cba8875809%3A0xaaea4a7b375462cb!2sLeanel&#39;s%20Garden%20Events%20Place!5e0!3m2!1sen!2sph!4v1730959854607!5m2!1sen!2sph" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Column>
      </Row>
      <Row>
        <div id="sched">
          <Column className="marginHeader">
            <h2>Schedule</h2>
            <Schedule/>
          </Column>
        </div>
      </Row>
      <Row>
        <div id="info">
          <Column className="pmt">
            <h2>Information</h2>
          </Column>
        </div>
      </Row>
      <Row>
        <div id="rsvp">
          <Column className="pmt">
            <h2>RSVP</h2>
          </Column>
        </div>
      </Row>
    </Container>
    );
};

export default Homepage;