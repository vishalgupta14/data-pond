import React, {Component} from 'react';
import {Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import Widget from "../../components/Widget";
import NasdaqSparkline from "../widgets/components/nasdaq-sparkline-widget/nasdaqSparkline";
import TextareaAutosize from "react-autosize-textarea";
import s from "../forms/elements/Elements.module.scss";
import {Link} from "react-router-dom";

class ApplicationPage extends Component {

    state = {
        popovers: {},
        promoAlert: false,
    };

    componentDidMount() {
        setTimeout(() => {
            this.showPromoAlert();
        }, 100);
    }

    showPromoAlert() {
        this.setState({promoAlert: true});
    }

    toggle(id) {
        this.setState(prevState => ({
            [id]: !prevState[id],
        }));
    }
    render() {
        const applications = [
            {name: "application 1", description: "This application is application 1"},
            {name: "application 2", description: "This application is application 2"},
            // add more applications as needed
        ];


        const {large} = this.state;
        return (
            <div>
                <div className="page-top-line container">
                    <Row>
                        <Col xs={6} md={3}>

                            <h2 className="page-title margin-left140-"><span className="fw-semi-bold">Application</span></h2>
                        </Col>
                        <Col xs={2} md={1}>
                            <Button color="inverse"  className="width-100 margin-left850">
                      <span className="circle">
                        <i className="fa fa-map-marker text-gray" />
                      </span>
                                Import
                            </Button>
                        </Col>
                        <Col xs={2} md={1}>
                            <Button color="inverse"  className="width-100 margin-left850" onClick={() => this.toggle('large')}>
                      <span className="circle">
                        <i className="fa fa-map-marker text-gray" />
                      </span>
                                Create
                            </Button>
                        </Col>
                    </Row>
                    {/* Modals */}
                    <Modal size="lg" isOpen={large} toggle={() => this.toggle('large')}>
                        <ModalHeader toggle={() => this.toggle('large')}>Create Application</ModalHeader>
                        <ModalBody className="bg-white">
                            <FormGroup row>
                                <Label for="normal-field" md={3} className="text-md-right">
                                    Application Name
                                </Label>
                                <Col md={7}>
                                    <Input type="text" id="normal-field" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3} className="text-md-right" for="elastic-textarea">Description </Label>
                                <Col md={7}>
                                    <TextareaAutosize
                                        rows={3} id="elastic-textarea"
                                        placeholder="Try to add few new lines.."
                                        className={`form-control ${s.autogrow} transition-height`}
                                    />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="default" onClick={() => this.toggle('large')}>Close</Button>
                            <Button color="primary">Create</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <Row>
                        {applications.map((application, index) => (
                            <Col md={3} xs={3} key={index}>
                                <Widget className="widget-sm" to="/app/application/procedure">
                                    <Link to="/app/application/procedure"><h6 className="mt-3 fw-normal">{application.name}</h6></Link>
                                    <p>
                                        <strong>{application.description}</strong>
                                    </p>
                                    <NasdaqSparkline />
                                </Widget>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}

export default ApplicationPage;
