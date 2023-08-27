import React, {Component} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Widget from '../../../components/Widget';
import userPhoto from "../../../images/common/plus.png";
import image from "../../../images/common/image.png";
import s from '../../organization/organization.module.scss';
import {Formik} from "formik";
import AddForm from "./AddForm";

class UserPage extends Component {
    state = {
        add: false,
        update: false,
        popovers: {},
        promoAlert: false,
        Users: [],
    };

    componentDidMount() {
        this.fetchUsers();

        setTimeout(() => {
            this.showPromoAlert();
        }, 100);
    }

    async deleteUser(id,event) {
        event.stopPropagation();
        try {
            const response = await fetch(`http://localhost:8080/v1/auth/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            this.fetchUsers();
        } catch (error) {
            console.error('There was a problem with the DELETE operation:', error.message);
        }
    }

    async fetchUsers() {
        try {
            const response = await fetch('http://localhost:8080/v1/auth/users/all', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json()
            console.log(result);
            const usersData = result.data.map(user => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber
            }));

            this.setState({Users: usersData});
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    }

    showPromoAlert() {
        this.setState({promoAlert: true});
    }

    toggleAdd(id) {
        this.setState((prevState) => ({
            [id]: !prevState[id],
        }));
    }

    toggleUpdate(id) {
        this.setState((prevState) => ({
            [id]: !prevState[id],
        }));
    }

    render() {
        const {add, update, Users} = this.state;

        return (
            <div>
                <Row>
                    <Col md={3} xs={3}>
                        <h2>Users</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={3}>
                        <Widget className="widget-sm" to="/app/users/procedure">
                            <div class="image-effect-container">
                                <img src={userPhoto} alt="userPhoto" className="effect-image"
                                     onClick={() => this.toggleAdd('add')}/>
                            </div>
                        </Widget>
                    </Col>
                    {Users.map((user, index) => (
                        <Col md={4} xs={4} key={index}>
                            <Widget className="widget-sm" to="/app/users/procedure" onClick={() => this.toggleUpdate('update')}>

                                <Row>
                                    <Col><p
                                        className="glyphicon glyphicon-user">{' '}{user.firstName} {user.lastName}</p>
                                    </Col>

                                    <Col>
                                        <link
                                            className="glyphicon glyphicon-remove"
                                            type="button"
                                            style={{float: 'right', fontSize: '20px'}}
                                            onClick={(event) => this.deleteUser(user.id, event)}>
                                        </link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="glyphicon glyphicon-envelope">{' '}{user.email}</p></Col>
                                </Row>
                                <Row>
                                    <Col><p className="glyphicon glyphicon-phone">{' '}{user.phoneNumber}</p>
                                    </Col>
                                </Row>
                                <img src={image} alt="image" className={s['rounded-image']}/>
                            </Widget>
                        </Col>
                    ))}
                </Row>
                <Modal size="lg" isOpen={add} toggle={() => this.toggleAdd('')}>
                    <ModalHeader toggle={() => this.toggleAdd('add')}>Add User</ModalHeader>
                    <ModalBody className="bg-white">
                        <AddForm history={this.props.history}
                                 toggleAdd={() => this.toggleAdd('add')}
                                 refreshUsers={this.fetchUsers.bind(this)}/>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>
                <Modal size="lg" isOpen={update} toggle={() => this.toggleUpdate('update')}>
                    <ModalHeader toggle={() => this.toggleUpdate('update')}>Update User</ModalHeader>
                    <ModalBody className="bg-white">
                        <AddForm/>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default UserPage;
