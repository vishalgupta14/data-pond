import React, { Component } from 'react';
import PropTypes from "prop-types";
import 'reactflow/dist/style.css';
import DataProcessing from "../data-processing/DataProcessing";

class WorkspaceArea extends Component {

    render() {

        const { activeButtonId } = this.props;

        if (activeButtonId === 0) {
            return <DataProcessing/>;
        }
        return null;
    }
}

WorkspaceArea.propTypes = {
    activeButtonId: PropTypes.number.isRequired,
};

export default WorkspaceArea;

