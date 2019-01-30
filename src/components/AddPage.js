import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { isTitleDuplicated } from '../utils/utils';

const styles = {
    container: {
        marginTop: '20px',
        maxWidth: '200px',
    },
    longText: {
        minHeight: '100px',
    },
    error: {
        fontSize: '10px',
        fontWeight: 500,
        color: 'red',
        margin: '0 0 10px',
    },
}

class AddPage extends Component {
    state={ page: {title: null, content: null}, errorMessage: null };

    handleInput = (key, value) => {
        const { page } = this.state;
        page[key] = value;
        this.setState({ page });
    }

    savePage = () => {
        const { page } = this.state;
        if(!page.title || !page.title.length) {
            this.setState({errorMessage: 'Title cannot be empty'});
            return;
        }
        if(isTitleDuplicated(page.title)) {
            this.setState({errorMessage: 'This title is already existed'});
            return;
        }
        this.setState({ errorMessage: null });
        this.props.addPage(page.title, page.content);
    }
    render() {
        const { errorMessage } = this.state;
        return (
            <div style={styles.container}>
                <FormGroup>
                    <Label for="exampleAddress">Page Title</Label>
                    {errorMessage && (<div style={styles.error}>{errorMessage}</div>)}
                    <Input type="text" placeholder="Title" onChange={event => this.handleInput('title', event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">Page Content</Label>
                    <Input type="textarea" placeholder="Content" style={styles.longText} onChange={event => this.handleInput('content', event.target.value)} />
                </FormGroup>
                <Button color="secondary" onClick={this.savePage}>Save Page</Button>
            </div>
        );
    }
}

AddPage.propTypes = {
    addPage: PropTypes.func.isRequired,
};

export default AddPage;
