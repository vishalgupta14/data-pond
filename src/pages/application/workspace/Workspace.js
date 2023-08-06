import React, {Component} from 'react';
import s from "../workspace/Workspace.module.scss";
import Tools from "../tools/Tools";
import WorkspaceArea from "../workspaceArea/WorkspaceArea";
class Workspace extends Component {
    state = {
        isNotificationOpen: true,
        filter: null,
        openedMessage: null,
        compose: false,
        composeData: null,
        alertAfter: false,
    }

    componentDidMount() {
        setTimeout(() => { this.fixAlert(); }, 0);
    }

    fixAlert() {
        this.setState({ alertAfter: true });
    }

    filter = (filter) => {
        this.setState({ filter, compose: false, composeData: null });
    }

    closeNotification() {
        this.setState({ isNotificationOpen: false });
    }

    openMessage = (id) => {
        this.setState(pvState => ({
            openedMessage: id,
            compose: id === null ? false : pvState.compose,
            composeData: id === null ? null : pvState.composeData,
        }));
    }

    changeCompose = (compose, data) => {
        this.setState({ compose });

        if (data) {
            this.setState({ composeData: data });
        }
    }

    render() {
        const {
            filter,
            openedMessage,
            compose,
            composeData,
        } = this.state;
        return (
            <div>

                <div className={s.view}>
                    <Tools
                        filter={this.filter}
                        openMessage={this.openMessage}
                        compose={this.changeCompose}
                    />
                    <WorkspaceArea
                        filter={filter}
                        openedMessage={openedMessage}
                        openMessage={this.openMessage}
                        compose={compose}
                        changeCompose={this.changeCompose}
                        composeData={composeData}
                    />
                </div>
            </div>
        );
    }
}
export default Workspace;
