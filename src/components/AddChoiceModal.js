import React from "react"
import {Modal, Button, InputGroup, FormControl} from "react-bootstrap"

const AddChoiceModal = props => (
    <Modal
        show={props.context.showModal}
        onHide={props.context.resetModal}
        size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Add Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Choice Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value={props.context.choiceDescription}
                    onChange={props.context.handleChoiceDescription}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>To act</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    as="select"
                    onChange={props.context.handleToAct}
                >
                    <option>Choose...</option>
                    {
                        props.context.actTitles.map((act, i) =>
                            <option key={i}>{act.title}</option>
                        )
                    }
                </FormControl>
            </InputGroup>

        </Modal.Body>
        <Modal.Footer>
            <Button
                onClick={props.context.saveChoice}>
                Save Choice
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AddChoiceModal;