import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Jumbotron, Container, Button } from 'reactstrap';


const Front = (props) => {
    //not sure if I need any of the prop.Types stuff...
    Jumbotron.propTypes = {
        // Pass in a Component to override default element
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        fluid: PropTypes.bool,
        className: PropTypes.string
      };
    
    return (
        <div class='pug'>
            <Jumbotron fluid>
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
            </Jumbotron>
        </div>
    )
}

export default Front