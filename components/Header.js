import React from 'react';

// IMPORT NPM LIB ITEMS
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// IMPORT RESOURCES
import img_1_0 from '../assets/img/1.jpeg'
import img_1_1 from '../assets/img/1-1.jpeg'
import img_1_2 from '../assets/img/1-2.jpeg'
import img_2 from '../assets/img/2.jpeg'
import img_3 from '../assets/img/3.jpeg'
import img_4 from '../assets/img/4.jpeg'

//IMPORT STYLES 
import '../assets/css/header.css'

//IMPORT VARS
import frontRouter from '../Router'

export let headerSettings = {
    imgSrc:img_1_0,
    controls:true,
    rotation:true,
    innerHeader:'',
    innerHeaderButton:'Contact',
    innerHeaderButtonLink:frontRouter.CONTACT,
    contact:true,
    height:'80vh',
    bottom:'30%',
    visible:true
}
export let changeHeaderOnPageSwap = () => {
    let changeHeaderOnPageNested = (router, img, text, bools, height, bot, vis) => {
        if (window.location.pathname === router) {
            headerSettings.imgSrc = img;
            headerSettings.innerHeader = text
            headerSettings.controls = bools;
            headerSettings.rotation = bools;
            headerSettings.contact = bools;
            headerSettings.height = height;
            headerSettings.bottom = bot;
            headerSettings.visible = vis;
        }
    }
    changeHeaderOnPageNested(frontRouter.HOME, img_1_0, 'Wij helpen met kleine en grote projecten!', true, '80vh', '30%', true)
    changeHeaderOnPageNested(frontRouter.SERVICES, img_2, 'Aanbod:Onze expertise', false, '65vh', '40%', true)
    changeHeaderOnPageNested(frontRouter.PROJECTS, img_3, 'Realisties:Onze projecten', false, '65vh', '40%', true)
    changeHeaderOnPageNested(frontRouter.CONTACT, img_4, 'Contact: Vertel ons meer!', false, '65vh', '40%', true)
    if (window.location.pathname === frontRouter.PRIVACYPOLICY || window.location.pathname === frontRouter.TERMSOFSERVICE || window.location.pathname === frontRouter.DISCLAIMER) {
        headerSettings.visible = false;
    }

}
changeHeaderOnPageSwap();

export class Header extends React.Component {  
    componentDidMount() {
        if (headerSettings.controls === true || headerSettings.rotation === true) {
            let imgCounter = 0;
            let la = document.getElementById('left-arrow');
            let ra = document.getElementById('right-arrow');
            let controlClick = false;
            let dot_0 = document.getElementById('dot_0');
            let dot_1 = document.getElementById('dot_1');
            let dot_2 = document.getElementById('dot_2');
            let domComp = () => {
                let imgCounterFunct = (timing, img, content, router, button, dom_0, dom_1, dom_2) => {
                    if (imgCounter === timing) {
                        headerSettings.imgSrc = img;
                        headerSettings.innerHeader = content;
                        headerSettings.innerHeaderButtonLink = router;
                        headerSettings.innerHeaderButton = button;
                        dom_0.setAttribute('class', 'activeCar');
                        dom_1.removeAttribute('class', 'activeCar');
                        dom_2.removeAttribute('class', 'activeCar');
                    }
                }
                imgCounterFunct(0,img_1_0,'Wij helpen met kleine en grote projecten!', frontRouter.CONTACT, 'Contact', dot_0, dot_1, dot_2)
                imgCounterFunct(1,img_1_1,'Bekijk onze projecten!', frontRouter.PROJECTS, 'Projecten', dot_1, dot_0, dot_2)
                imgCounterFunct(2,img_1_2,'Wat wij voor jou kunnen betekenen?', frontRouter.SERVICES, 'Aanbod', dot_2, dot_1, dot_0)
            }
            let imgSwapper = () => {
                let mastHead = document.getElementById('mast-head')
                if (controlClick === false && headerSettings.visible === true) {
                   imgCounter++ 
                   if (imgCounter >=3) {
                       imgCounter=0;
                   }
                }
                let outerHead = document.getElementById('outer-head');
                if (headerSettings.visible === true) {
                outerHead.remove()
                domComp();
                let newOuterHead = document.createElement('div')
                newOuterHead.id = 'outer-head'
                newOuterHead.setAttribute('class', 'outer-head')
                newOuterHead.setAttribute('style', `background-image:url(${headerSettings.imgSrc})`)
                let InnerHead = document.getElementById('inner-head');
                InnerHead.remove()
                let newInnerHead = document.createElement('div')
                newInnerHead.id = 'inner-head'
                newInnerHead.setAttribute('class', 'inner-head')
                newInnerHead.innerHTML=`<h1>${headerSettings.innerHeader}</h1> <span><a class="btn-dark" href=${headerSettings.innerHeaderButtonLink}>${headerSettings.innerHeaderButton}</a></span>`
                mastHead.appendChild(newOuterHead)
                mastHead.appendChild(newInnerHead)
                }


            }
            let dotFunct = (dom, amount) => {
                dom.addEventListener("click", function(){
                    imgCounter=amount
                        domComp();
                        controlClick = true;
                        imgSwapper();
                        controlClick = false;
                })
               

            }
            if (dot_0 !== null && dot_1 !== null && dot_2 !== null) {
                dotFunct(dot_0, 0);
                dotFunct(dot_1, 1);
                dotFunct(dot_2, 2);
         }
            let imgSwapInt = setInterval(function(){ imgSwapper(); }, 10000)
            if (controlClick) {
                clearInterval(imgSwapInt)
            }
            if (document.getElementById('mast-head')) {
            la.addEventListener("click", function(){
                imgCounter--
                if (imgCounter <= -1) {
                    imgCounter=2
                }
                domComp();
                controlClick = true;
                imgSwapper();
                controlClick = false;
            })
            ra.addEventListener("click", function(){
                imgCounter++
                if (imgCounter >= 3) {
                    imgCounter=0
                }

                domComp();
                controlClick = true;
                imgSwapper();
                controlClick = false;
           
            })}
        }
        else {
            const outerHead = document.getElementById('outer-head');
            outerHead.style.animation='unset';
        }
    }

    render() {
        let HeaderProp = () => {
            const mastHead= {
                height: headerSettings.height
            };
            const outerHead = {
                backgroundImage:`url(${headerSettings.imgSrc})`,
                height: headerSettings.height
            };
            const innerHead = {
                bottom: headerSettings.bottom
            };
                return (
                <div>
                    {headerSettings.visible   
                    ?<div id="mast-head" className='mast-head' style={mastHead}>
                    {headerSettings.controls 
                    ? <div className="header-controls"><div id="left-arrow"><FontAwesomeIcon icon={faChevronLeft}/></div><div  id="right-arrow"><FontAwesomeIcon icon={faChevronRight}/></div></div> 
                    : "" 
                    }
                    {headerSettings.rotation
                        ? <div className="dotdotdot-control">
                            <div id="dot_0" className="activeCar"></div>
                            <div id="dot_1"></div>
                            <div id="dot_2"></div>
                        </div>
                        : ""
                    }
                    <div id="outer-head" className='outer-head' style={outerHead}></div>
                    <div id="inner-head" className='inner-head' style={innerHead}>
                        <h1>{headerSettings.innerHeader}</h1>
                        {headerSettings.contact
                        ?<span><a className="btn-dark" href={frontRouter.CONTACT}>{headerSettings.innerHeaderButton}</a></span>
                        :""
                        }
                    </div>
                </div>
                : ""
                }
                </div>
                )
            }




        return (
            <header>
                <HeaderProp/>
                <hr></hr>
            </header>
        )
    }
}
export default React.memo(Header)