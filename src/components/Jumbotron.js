import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from 'styled-components';
import homeImage from '../assets/homeImage.jpg';



const Styles = styled.div`
.jumbo {
    background: url(${homeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: black;
    padding-top: 50px;
    font-family: comic sans;
    text-align: center;
    font-size: 30px;
    height: 300px;
    position: relative;
    z-index: -z;
    
}

.overlay{
    background-color:#000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 style={{ color:"#FFFFFF"}}>Welcome!</h1>
                <p> An Innovative Development platform. Improve Knowledge and Experience, Portfolio Quality, Grow your idea and business.</p>
            </Container>
            </Jumbo>
    </Styles>
)