import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MainMapPage from './MainMapPage.js/index.js';

import Page from './Page.js';

export default class Main extends Component {
  static propTypes = {
    routeName: PropTypes.string.isRequired,
    routePath: PropTypes.string.isRequired,
    routeFullPath: PropTypes.string.isRequired,
    routeParams: PropTypes.any.isRequired
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }


  render() {
    const main = this._renderMain(this.props);

    return (
          <Page example={example}>
            <MainMapPage />
          </Page>
      
    );
  }
}
