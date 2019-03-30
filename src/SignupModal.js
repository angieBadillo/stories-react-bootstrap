import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SignupModal extends Component {
    render() {
      return (
        <Modal 
            {...this.props}
            size="sm"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" size="md" type="submit" block>
                    Continue
                </Button>
            </Form>
            </Modal.Body>
    </Modal>
      );
    }
  }
  
export default SignupModal;