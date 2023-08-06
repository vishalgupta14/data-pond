import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import DashboardAnalytics from '../../pages/analytics';
import Dashboard from '../../pages/dashboard';
import { SidebarTypes } from '../../reducers/layout';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Helper from '../Helper';
import { openSidebar, closeSidebar, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import { DashboardThemes } from '../../reducers/layout';
import BreadcrumbHistory from '../BreadcrumbHistory';
import ApplicationPage from "../../pages/application/ApplicationPage";
import ProcedurePage from "../../pages/application/procedure/ProcedurePage";
import Workspace from "../../pages/application/workspace/Workspace";

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dashboardTheme: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
    dashboardTheme: DashboardThemes.DARK
  };
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768 && this.props.sidebarStatic) {
      this.props.dispatch(toggleSidebar());
    }
  }

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          this.props.sidebarStatic ? `${s.sidebarStatic}` : '',
          !this.props.sidebarOpened ? s.sidebarClose : '',
          'sing-dashboard',
          `dashboard-${(localStorage.getItem("sidebarType") === SidebarTypes.TRANSPARENT) ? "light" : localStorage.getItem("dashboardTheme")}`,
          `header-${localStorage.getItem("navbarColor") ? localStorage.getItem("navbarColor").replace('#', '') : 'FFFFFF'}`
        ].join(' ')}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />
          <Helper />
          
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
            <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/analytics" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/main/analytics" exact component={DashboardAnalytics} />
                    <Route path="/app/application" exact component={ApplicationPage} />
                    <Route path="/app/application/procedure" exact component={ProcedurePage} />
                    <Route path="/app/application/procedure/workspace" exact component={Workspace} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>

              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    dashboardTheme: store.layout.dashboardTheme,
    navbarColor: store.layout.navbarColor,
    sidebarType: store.layout.sidebarType,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
