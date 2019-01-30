import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const styles = {
    loginContainer: {
        width: '200px',
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -70%)',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    error: {
        fontSize: '12px',
        fontWeight: 500,
        color: 'red',
        margin: '0 0 10px',
        textAlign: 'center',
    },
}

class Auth extends Component {
    state = {auth: { username: null, password: null }, errorMessage: null};
    handleInput = (key, value) => {
        const { auth } = this.state;
        auth[key] = value;
        this.setState({ auth });
    }
    handleLogin = () => {
        const { auth } = this.state;
        if(!auth.username || !auth.username.length) {
            this.setState({ errorMessage: 'Please input your username' });
            return;
        }
        if(!auth.password || !auth.password.length) {
            this.setState({ errorMessage: 'Please input your password' });
            return;
        }
        if(auth.username !== auth.password) {
            this.setState({ errorMessage: 'Wrong username/password' });
            return;
        }
        if(auth.username === auth.password) {
            localStorage.setItem('isLoggedIn', 1);
            localStorage.setItem('username', auth.username);
            localStorage.setItem('pages', []);
            window.location.reload();
        }
    }
    render() {
        const { errorMessage } = this.state;
        return (
            <div style={styles.loginContainer}>
                <h2 style={styles.title}>Please Log In</h2>
                {errorMessage && (<div style={styles.error}>{errorMessage}</div>)}
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                    <Input placeholder="Your username" onChange={event => this.handleInput('username', event.target.value)} />
                </InputGroup>
                <br></br>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Password&nbsp;</InputGroupAddon>
                    <Input type="password" placeholder="Your password" onChange={event => this.handleInput('password', event.target.value)} />
                </InputGroup>
                <br></br>
                <Button color="secondary" size="lg" block onClick={this.handleLogin}>Login</Button>
            </div>
        );
    }
}

export default Auth;
