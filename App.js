import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import TOS from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';

//IMPORT STYLES
import './assets/css/nav.css'
import './assets/css/common.css'
import './assets/css/variables.css'
import './assets/css/content.css'

//IMPORT VARS
import frontRouter from './Router'

// IMPORT RESOURCES
import img_1_0 from './assets/img/1.jpeg'
import img_1_1 from './assets/img/1-1.jpeg'
import img_1_2 from './assets/img/1-2.jpeg'
import img_2 from './assets/img/2.jpeg'
import img_3 from './assets/img/3.jpeg'
import img_4 from './assets/img/4.jpeg'

let preloader = () => {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();

        img1.src = img_1_0;
        img2.src = img_1_1;
        img3.src = img_1_2;
        img4.src = img_2;
        img5.src = img_3;
        img6.src = img_4;
    }
}
let addLoadEvent = (func) => {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);

class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <Nav/>
                <Header/>
                <Switch>
                    <Route exact path={frontRouter.HOME} component={Home}/>
                    <Route path={frontRouter.SERVICES} component={Services}/>
                    <Route path={frontRouter.CONTACT} component={Contact}/>
                    <Route path={frontRouter.PROJECTS} component={Projects}/>
                    <Route path={frontRouter.TERMSOFSERVICE} component={TOS}/>
                    <Route path={frontRouter.DISCLAIMER} component={Disclaimer}/>
                    <Route path={frontRouter.PRIVACYPOLICY} component={PrivacyPolicy}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </BrowserRouter>

        );
    }
}

export default App;