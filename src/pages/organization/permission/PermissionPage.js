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
                <div>
                    <Row>
                        <Col md={3} xs={3}>
                            <h2>Permission</h2>
                        </Col>
                    </Row>
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
