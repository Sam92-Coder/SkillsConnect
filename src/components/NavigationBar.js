import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`.navbar {
    background-color: #20639B;
    font-weight: bold;
    padding-right: 50px;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">SkilssConnect</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navba-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Register">Sign Up</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Login">Sign In</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
       </Navbar>
    </Styles>
)