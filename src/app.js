import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch } from "react-router-dom";
import { Provider, AppContext } from "./component/utils/provider";
import { RoutesMap } from "./component/utils/routes";
import { OsRoutesMap } from "./component/utils/routesOsTheme";
import Config from "./component/config/Config";
import "./index.scss";

const Lockscreen = lazy(() => import("./component/lockscreen/Lockscreen"));
const Popup = lazy(() => import("./component/popup/Popup"));

export default class App extends Component {
  static contextType = AppContext;

  componentDidMount = () => {
    const { setState } = this.context;
    setTimeout(() => {
      // setState({ showPopup: true } , prev => console.log(prev))
    }, 10);
  };

  render() {
    const { state } = this.context;
    return (
      <React.Fragment>
        <Suspense
          fallback={
            <img
              style={{ width: 250 }}
              src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
            />
          }
        >
          <HashRouter>
            <Switch>
              <React.Fragment>
                {state.lock ? (
                  <Lockscreen />
                ) : (
                  <React.Fragment>
                    {state.configMode && <Config />}
                    {state.showPopup && <Popup />}
                    {state.OSMode ? <OsRoutesMap /> : <RoutesMap />}
                  </React.Fragment>
                )}
              </React.Fragment>
            </Switch>
          </HashRouter>
        </Suspense>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#app")
);
