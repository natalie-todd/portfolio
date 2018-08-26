import React, { Component } from 'react';
import PropTypes from "prop-types";
// import Nav from './components/Front/Nav';
import { Container, Button } from 'reactstrap';


const Front = (props) => {
    return (
        <div>
            {/* <Nav /> */}
                <Container fluid>
                <h1 className="display-3">Full Stack Developer</h1>
                <p className="lead">Based out of Denver, CO. My skillset
                    includes React, Vue.js, Node, Express.js, Knex, and
                    PostgreSQL. If you are an employer looking to hire,
                    you can get in touch with me here.</p>
                <p className="lead">
                    <Button color="primary">Projects</Button>
                </p>
                </Container>
       </div>
    )
}

export default Front