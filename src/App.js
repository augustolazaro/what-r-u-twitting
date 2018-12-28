import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Navbar as _Navbar, InputGroup, FormControl, Form } from 'react-bootstrap'

import { requestUserTimeline } from './reducers/reducers'

const Navbar = styled(_Navbar)`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 30px 0;
`

class App extends Component {
  componentDidMount() {
    const { requestUserTimeline } = this.props

    return requestUserTimeline()
  }

  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  requestUserTimeline: () => dispatch(requestUserTimeline()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
