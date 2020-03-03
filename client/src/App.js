import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/vendors/bootstrap-grid.min.css";
import "./styles/styles.scss";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarUdemy from "./components/Navbar/NavbarUdemy";
import FullCover from "./components/FullCover/FullCover";
import FullImage from "./components/FullCover/FullImage";
import Overlay from "./components/Overlay/Overlay";
import Layout from "./components/Layout/Layout";
import StickyImage from "./components/Sticky/StickyImage";
import SlideShow from "./components/SlideShow/SlideShow";
import Modal from "./components/Modal/Modal";
import Accordion from "./components/Accordion/Accordion";
import Tabs from "./components/Tabs/Tabs";
import PushNav from "./components/Navbar/PushNav";
import DropNav from "./components/Navbar/DropNav";
import CurtinMenu from "./components/CurtainMenu/CurtinMenu";
import Misc from "./components/Misc/Misc";
import Wavy from "./components/Wavy/Wavy";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import Natour from "./components/NatoursCss/Natour";
import Rolling from "./components/Rolling/Rolling";
import Grid from "./components/Grid/Grid";
import SlidingCheck from "./components/SlidingCheck/SlidingCheck";

const Main = withRouter(({ location }) => {
  return (
    <Provider store={store}>
      <div>
        {/* {location.pathname !== "/login" && <Navbar />} */}
        {location.pathname !== "/login" && location.pathname !== "/natour" && (
          <NavbarUdemy />
        )}
        <Switch>
          <Route exact path="/" component={FullCover} />
          <Route exact path="/full" component={FullImage} />
          <Route exact path="/overlay" component={Overlay} />
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/sticky" component={StickyImage} />
          <Route exact path="/slideshow" component={SlideShow} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/accordion" component={Accordion} />
          <Route exact path="/tabs" component={Tabs} />
          <Route exact path="/pushnav" component={PushNav} />
          <Route exact path="/dropnav" component={DropNav} />
          <Route exact path="/curtain" component={CurtinMenu} />
          <Route exact path="/misc" component={Misc} />
          <Route exact path="/wavy" component={Wavy} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/natour" component={Natour} />
          <Route exact path="/rolling" component={Rolling} />
          <Route exact path="/grid" component={Grid} />
          <Route exact path="/slidingcheck" component={SlidingCheck} />
        </Switch>
      </div>
    </Provider>
  );
});
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
