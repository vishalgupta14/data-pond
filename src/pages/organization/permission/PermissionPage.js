import React, { Component } from 'react';
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Widget from '../../../components/Widget';
import TextareaAutosize from 'react-autosize-textarea';
import s from '../../forms/elements/Elements.module.scss';

class PermissionPage extends Component {
    state = {
        large: false,
        popovers: {},
        promoAlert: false,
        Permissions: [],
    };

    componentDidMount() {
        setTimeout(() => {
            this.showPromoAlert();
        }, 100);
    }

    showPromoAlert() {
        this.setState({ promoAlert: true });
    }

    toggle(id) {
        this.setState((prevState) => ({
            [id]: !prevState[id],
        }));
    }

    render() {
        const Permissions = [
            { name: 'Org 1', description: 'This is Permission 1' },
            { name: 'Org 2', description: 'This is Permission 2' },
            // add more Permissions as needed
        ];

        const { large } = this.state;

        return (
            <div>
                <div className="page-top-line container">
                    <Row>
                        <Col xs={1} md={1}>
                            <h2 className="page-title margin-left140-">
                                <span className="fw-semi-bold">Permissions</span>
                            </h2>
                        </Col>
                        <Col xs={1} md={1}>
                            <Button color="inverse" className="width-100 margin-left850">
                                <span className="circle">
                                    <i className="fa fa-map-marker text-gray" />
                                </span>
                                Import
                            </Button>
                        </Col>
                        <Col xs={1} md={1}>
                            <Button
                                color="inverse"
                                className="width-100 margin-left850"
                                onClick={() => this.toggle('large')}
                            >
                                <span className="circle">
                                    <i className="fa fa-map-marker text-gray" />
                                </span>
                                Create
                            </Button>
                        </Col>
                    </Row>
                    {/* Modals */}
                    <Modal size="lg" isOpen={large} toggle={() => this.toggle('large')}>
                        <ModalHeader toggle={() => this.toggle('large')}>Create Permission</ModalHeader>
                        <ModalBody className="bg-white">
                            <FormGroup row>
                                <Label for="org-name" md={3} className="text-md-right">
                                    Permission Name
                                </Label>
                                <Col md={7}>
                                    <Input type="text" id="org-name" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3} className="text-md-right" for="org-description">
                                    Description
                                </Label>
                                <Col md={7}>
                                    <TextareaAutosize
                                        rows={3}
                                        id="org-description"
                                        placeholder="Try to add few new lines.."
                                        className={`form-control ${s.autogrow} transition-height`}
                                    />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="default" onClick={() => this.toggle('large')}>
                                Close
                            </Button>
                            <Button color="primary">Create</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <Row>
                        {Permissions.map((org, index) => (
                            <Col md={3} xs={3} key={index}>
                                <Widget className="widget-sm" to="/app/Permissions/procedure">
                                    <p>
                                        <strong>{org.description}</strong>
                                    </p>
                                    {/* Add your widget content here */}
                                </Widget>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}

export default PermissionPage;
