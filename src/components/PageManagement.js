import React, { Component, Fragment } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import AddPage from './AddPage';
import DisplayPage from './DisplayPage';
import { parseJSON } from '../utils/utils';

const styles = {
    listContainer: {
        paddingBottom: '20px',
    },
    title: {
        marginLeft: '2px',
        marginBottom: '10px',
    },
    leftCol: {
        minHeight: '80vh', 
        borderRight: '1px solid #DDDDDD',
        marginBottom: '20px',
    }
}

class PageManagement extends Component {
    state={ 
        pages: localStorage.getItem('pages') ? parseJSON(localStorage.getItem('pages')) : null, 
        currentActive: null, 
        displayingPage: null,
    };

    addPage = (title, content) => {
        const { pages } = this.state;
        let pageArray = pages ? pages : [];
        pageArray.push({index: pageArray.length + 1, title, content});
        localStorage.setItem('pages', JSON.stringify(pageArray));
        this.setState({ pages: pageArray });
    }

    displayPage = page => {
        this.setState({
            currentActive: page.index,
            displayingPage: page,
        });
    }

    addPageMode = () => {
        this.setState({
            currentActive: null,
            displayingPage: null,
        })
    }

    render() {
        const { pages, currentActive, displayingPage } = this.state;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xs="4" style={styles.leftCol}>
                            <h4 style={styles.title}>Pages List</h4>
                            {pages ? (
                                <ListGroup style={styles.listContainer}>
                                    {pages.map((page) => <ListGroupItem active={currentActive === page.index} key={page.index} action onClick={e => this.displayPage(page)}>{page.title.length > 10 ? `${page.title.substring(0, 10)}...` : page.title}</ListGroupItem>)}
                                </ListGroup>) : (
                                <span style={{ marginLeft: "2px" }}>No pages available.</span>
                            )}
                        </Col>
                        <Col>
                            <Button onClick={this.addPageMode}>Add Page</Button>
                            {!displayingPage ? <AddPage addPage={this.addPage} /> : <DisplayPage displayingPage={displayingPage} />}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PageManagement;
