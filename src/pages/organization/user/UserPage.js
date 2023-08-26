import React, { Component } from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Widget from '../../../components/Widget';
import userPhoto from "../../../images/common/plus.png";
import '../../organization/organization.module.scss';
import {Formik} from "formik";
import UsersForm from "./UserForm";

class UserPage extends Component {
    state = {
        large: false,
        popovers: {},
        promoAlert: false,
        Users: [],
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
        const Users = [
            { name: 'Org 1', description: 'This is User 1' },
            { name: 'Org 2', description: 'This is User 2' },
            // add more Users as needed
        ];

        const { large } = this.state;

        return (
            <div>
                    <Row>
                        <Col md={3} xs={3}>
                            <h2>Users</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} xs={3} >
                            <Widget className="widget-sm"  to="/app/users/procedure">
                                <div class="image-effect-container">
                                    <img src={userPhoto} alt="Description" className="effect-image" onClick={() => this.toggle('large')}/>
                                </div>
                            </Widget>
                        </Col>
                        {Users.map((org, index) => (
                            <Col md={3} xs={3} key={index}>
                                <Widget className="widget-sm" to="/app/users/procedure">
                                    <p>
                                        <strong>{org.description}</strong>
                                    </p>
                                    {/* Add your widget content here */}
                                </Widget>
                            </Col>
                        ))}
                    </Row>
                    <Modal size="lg" isOpen={large} toggle={() => this.toggle('large')}>
                        <ModalHeader toggle={() => this.toggle('large')}>Add User</ModalHeader>
                        <ModalBody className="bg-white">
                                    <UsersForm />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </Modal>
            </div>
        );
    }
}

export default UserPage;
