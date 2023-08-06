import React, { Component } from 'react';
import { Table } from 'reactstrap';

import Widget from '../../../components/Widget';
import PropTypes from "prop-types";
import s from "../workspaceArea/WorkspaceArea.module.scss";


class WorkspaceArea extends Component {
    render() {
        const { activeButtonId } = this.props;

        if (activeButtonId === 0) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 0</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        else if (activeButtonId === 1) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 1</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        else if (activeButtonId === 2) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 2</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        else if (activeButtonId === 3) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 3</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        else if (activeButtonId === 4) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 4</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        else if (activeButtonId === 5) {
            return (
                <div className={s.screen}>
                    <Widget className={s.height}>
                        <Table striped hover>
                            <thead>
                            <tr>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <h5>test 5</h5>
                            </tbody>
                        </Table>
                    </Widget>
                </div>
            );
        }
        return null;
    }
}

WorkspaceArea.propTypes = {
    activeButtonId: PropTypes.number.isRequired,
};

export default WorkspaceArea;

