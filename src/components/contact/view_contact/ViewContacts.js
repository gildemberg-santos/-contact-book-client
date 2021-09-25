import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function ViewContact(props) {
    const [name, setName] = useState(`${props.contact.name}`);
    const [cpf, setCpf] = useState(`${props.contact.cpf}`);
    const [email, setEmail] = useState(`${props.contact.email}`);
    const [dateOfBirth, setDateOfBirth] = useState(`${props.contact.dateOfBirth}`);
    const [show, setShow] = useState('');

    const handleSubmit = (async () => {
        setShow(false)
        props.loadContacts();
    });
    return (
        <div>
            <a className="check" href="#">
                <FontAwesomeIcon onClick={e => setShow(true)} icon={faEnvelopeOpenText} size="sm" />
            </a>

            <Modal show={show || false} onHide={e => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>View Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" disabled="false" placeholder="Full Name" value={name || ''} onChange={e => setName(e.target.value)} />
                    <Form.Control type="text" disabled="false" placeholder="CPF ex:000.000.000-00" value={cpf || ''} onChange={e => setCpf(e.target.value)} />
                    <Form.Control type="text" disabled="false" placeholder="E-mail ex:test@test.com" value={email || ''} onChange={e => setEmail(e.target.value)} />
                    <Form.Control type="text" disabled="false" placeholder="Date of Birth ex:00/00/0000" value={dateOfBirth || ''} onChange={e => setDateOfBirth(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={e => setShow(false)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewContact;