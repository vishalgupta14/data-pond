import React from 'react';
import {Col, Row} from "reactstrap";
import {Column} from "reactstrap";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div>
            <Row style={{marginTop:'-250px',marginLeft:'180px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Input Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'380px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'580px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'780px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'980px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'1180px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'-155px',marginLeft:'1380px'}}>
                <Col xs={6} md={6}>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Default Node
                    </div>
                    <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable
                         style={{width: '10vw', height: '5vh', backgroundColor: 'white'}}>
                        Output Node
                    </div>
                </Col>
            </Row>
        </div>
    );
};
