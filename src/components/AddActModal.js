import React from "react"
import {Modal, Button, InputGroup, FormControl} from "react-bootstrap"

const AddActModal = props => (
    <Modal
        show={props.context.showModal}
        onHide={props.context.resetModal}
        size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Add Act</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value={props.context.title}
                    onChange={props.context.handleTitle}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    as="textarea"
                    style={{'height': '125px'}}
                    value={props.context.description}
                    onChange={props.context.handleActDescription}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Cover</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value={props.context.cover}
                    onChange={props.context.handleCover}
                />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button
                onClick={props.context.saveAct}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AddActModal;