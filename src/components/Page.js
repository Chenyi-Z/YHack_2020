import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Header from './Header.js/index.js';

export default class Page extends Component {
  static propTypes = {
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-view">
        <Header className="main-view__row" {...this.props} />
        <main className="main-view__row main-view__row--expanded">
          <div className="main-view__row-content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
