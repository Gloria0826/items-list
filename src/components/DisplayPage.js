import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Badge  } from 'reactstrap';

const styles = {
    title: {
        fontSize: '20px',
        margin: '20px 0',
    },
    content: {
        fontSize: '16px',
        marginLeft: '4px',
    },
}

class DisplayPage extends Component {
    render() {
        const { displayingPage } = this.props;
        return (
            <div>
                <Badge color="secondary" style={styles.title}>{displayingPage.title}</Badge>
                <p style={styles.content}>{displayingPage.content}</p>
            </div>
        );
    }
}

DisplayPage.propTypes = {
    displayingPage: PropTypes.object.isRequired,
};

export default DisplayPage;
