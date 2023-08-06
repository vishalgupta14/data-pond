import React, { Component } from 'react';
import cx from 'classnames';
import { Badge } from 'reactstrap';

import s from './Tools.module.scss';
import WorkspaceArea from '../workspaceArea/WorkspaceArea';
class Tools extends Component {
  state = { activeButtonId: 0, showWorkspace: false }

  handleButtonClick(id) {
    this.setState({ activeButtonId: id});
  }

  render() {
    const mainButtons = [
      { id: 0, title: 'Data Processing', filter: null },
      { id: 1, title: 'Variable', filter: 'starred' },
      { id: 2, title: 'Participation', filter: 'sent' },
      { id: 3, title: 'Forms', filter: 'draft' },
      { id: 4, title: 'Email', filter: 'trash' },
      { id: 5, title: 'Rules', filter: 'trash' }
    ];

    const { activeButtonId} = this.state;

    return (
        <div className={s.filters}>
          <div className={s.mainFilterButtons}>
            {mainButtons.map(button =>
                <button
                    className={cx('btn', s.button, { [s.buttonActive]: button.id === activeButtonId })}
                    key={button.id}
                    onClick={() => this.handleButtonClick(button.id)}
                >
                  {button.title}
                  {button.notifications &&
                      <Badge color={button.lable || 'default'} pill>{button.notifications}</Badge>}
                </button>
            )}
          </div>
          {<WorkspaceArea activeButtonId={activeButtonId} />}
        </div>
    );
  }
}

export default Tools;
