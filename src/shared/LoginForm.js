import React from 'react';
import "../App.scss";
import { Form, Button } from 'react-bootstrap';

const LoginForm = (props) => { 
    return (
        <div>
            <h1>Log in</h1>
            <p>Become a deviant. <a>Join</a></p>
     <Form>
        <Form.Group controlId="formBasicEmail" className="form-group">
        <Form.Control type="email" />
        <Form.Label>Username</Form.Label>
     </Form.Group>
      <Form.Group controlId="formBasicPassword" className="form-group">
          <Form.Control type="password" />
          <Form.Label>Password</Form.Label>
     </Form.Group>
      <Button variant="primary" type="submit">
      Submit
      </Button>
    </Form>
    </div>
    )
}

export default LoginForm;
