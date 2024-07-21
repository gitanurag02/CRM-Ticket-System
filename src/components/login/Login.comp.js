import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({handleOnSubmit, hadleOnChange, email, pass}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}     
                onChange={hadleOnChange}
                placeholder='Enter Email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={pass}
                onChange={hadleOnChange}
                placeholder='password'
              />
            </Form.Group>

            <Button type='submit'>Login</Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href='#!'>Forget password?</a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
	hadleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}

