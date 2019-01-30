import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { isAuthenticated, getUsername } from '../utils/utils';

const styles = {
    barBorder: {
        borderRadius: 0,
    },
    navText: {
        fontSize: '14px',
    },
    navBrand: {
        fontSize: '20px',
        paddingTop:'8px',
    },
    pointerCursor: {
        cursor: 'pointer',
    },
}

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('pages');
        window.location.reload();
    }

    render() {
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md" style={styles.barBorder}>
                    <NavbarBrand href="/" style={styles.navBrand}>MyPages</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {isAuthenticated() ? (
                            <Nav className="ml-auto" navbar style={styles.navText}>
                                <NavItem>
                                    <NavLink>Welcome{getUsername() ? `, ${getUsername()}!` : '!'}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={styles.pointerCursor} onClick={this.logout}>Logout</NavLink>
                                </NavItem>
                            </Nav>
                        ) : (
                            <Nav className="ml-auto" navbar style={styles.navText}>
                                <NavItem>
                                    <NavLink>Please Login</NavLink>
                                </NavItem>
                            </Nav>
                        )}
                        
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default AppNavbar;
