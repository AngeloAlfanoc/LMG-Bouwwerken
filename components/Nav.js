import React from 'react';
import { NavLink } from 'react-router-dom';
import changeHeaderOnPageSwap from './Header'
import frontRouter from '../Router'
import logo from '../assets/svg/logo-lmg.svg'

    let mobMenuIsOpen = false;
    let hamburger = () => {
      let mobMenuList = document.getElementById('mobMenuList')
      if (mobMenuIsOpen === false) {
        mobMenuList.setAttribute('class', 'active')
        mobMenuIsOpen = true;
      }
      else if (mobMenuIsOpen === true) {
        mobMenuList.removeAttribute('class', 'active')
        mobMenuIsOpen = false;
      }
      
    }

export default class Nav extends React.Component {
  
  render(){

  const homeClass = window.location.pathname === "/" ? "active" : "";
  const servicesClass = window.location.pathname.match(/^\/aanbod/) ? "activeMenu" : "";
  const contactClass = window.location.pathname.match(/^\/contact/) ? "activeMenu" : "";
  const projectClass= window.location.pathname.match(/^\/projecten/) ? "activeMenu" : "";


  
  return (
       <div>
       <div className="nav-outer">
        <nav>
          <ul className="main-menu" id="nav-menu">
            <li   className={homeClass}     onClick={changeHeaderOnPageSwap}><NavLink  exact to={frontRouter.HOME}>Home</NavLink ></li>
            <li   className={servicesClass} onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.SERVICES}>Aanbod</NavLink></li>
            <div  className="logo"><a href="/"><img width="70%" src={logo} alt="website logo"></img><span>Algemene bouwwerken L.M.G</span></a></div>
            <li   className={projectClass}  onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.PROJECTS}>Projecten</NavLink></li>
            <li   className={contactClass}  onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.CONTACT}>Contact</NavLink></li>
          </ul>
          <div  className="mobile-menu" id="mob-menu">
            <div onClick={hamburger} id="mobMenuIcon" class="nav-icon">
              <div></div>
            </div>
            <ul id="mobMenuList">
              <li onClick={changeHeaderOnPageSwap}><NavLink  exact to={frontRouter.HOME}>Home</NavLink ></li>
              <li onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.SERVICES}>Aanbod</NavLink></li>
              <li onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.PROJECTS}>Projecten</NavLink></li>
              <li onClick={changeHeaderOnPageSwap}><NavLink   to={frontRouter.CONTACT}>Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
      );}}

