import React, { Component } from 'react';
import Blueprint from '../assets/svg/018-blueprint.svg'
import Crane from '../assets/svg/005-crane.svg'
import wheelbarrow from '../assets/svg/029-wheelbarrow.svg'
import {instaObject} from '../Settings'
import axios from 'axios';

//IMPORT VARS
import frontRouter from '../Router'


class Projects extends Component {
  componentDidMount() {
    const outputContainer = document.getElementById('insta-output')
    let counter = 0;
      axios.get(`https://www.instagram.com/graphql/query/?query_hash=2c5d4d8b70cad329c4a6ebe3abb6eedd&variables={"id":${instaObject.INSTA_ID},"first":3,"after":""}`)
      .then(function (res){
      let responseArr = (res.data.data.user.edge_owner_to_timeline_media.edges)
      if (responseArr.length) {
        outputContainer.innerHTML=''
      }
        for (let child of responseArr) {
          console.log(child)
          let url = child.node.display_url;
          let href = child.node.shortcode;
          let instapost = document.createElement('div')
          instapost.id='project-'+counter
          instapost.setAttribute('class','col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center flex-row my-3')
          instapost.setAttribute('style', 'cursor:pointer')
          let name;
          if (child.node.edge_media_to_caption.edges[0] === undefined) {
            name = '';
            instapost.innerHTML=`<div onclick="location.href='https://www.instagram.com/p/${href}'">
            <img class="img-fluid rounded shadow-sm" style="height:20rem" src=${url}></img>
            <h3 class="my-3 text-left"></h3></div>` 
            
          }
          else{
            name = child.node.edge_media_to_caption.edges[0].node.text
            name.substr(0,9)
            instapost.innerHTML=`<div onclick="location.href='https://www.instagram.com/p/${href}'">
            <img class="img-fluid rounded shadow-sm" style="height:20rem" src=${url}></img>
            <h3 class="my-3 text-left">${name.substr(0,40)+'...'}</h3></div>`  
          }
          counter++
          outputContainer.appendChild(instapost)
        }
    })
  }
  render() {
    
    return (
        <main id="home">
            
      {/* AANBOD START */}
        <section className="container py-5"> 
              <h1>ons aanbod</h1>
              <h2>jaren ervaring !</h2>
             
              <div className="row p-5">
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center">
                      <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center figure-rounded my-5">
                        <img width="100%" height="100%" src={Blueprint} alt="blueprint"></img>
                      </div>
                      <h3>constructie</h3>
                      <p>Door het bouwproces te organiseren als een cirkel van continue opvolging en begeleiding die steunt op de kennis van ‘open minded’ specialisten, leveren wij...</p>
                      <span><a href={frontRouter.SERVICES}>lees meer</a></span>
                   
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-12">
                  <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center">
                      <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center figure-rounded my-5">
                        <img width="100%" height="100%"  src={Crane} alt="crane"></img>
                      </div>
                      <h3>daken</h3>
                      <p>Totaal renovatie van je dak, ofwel slopen en nieuw, wij doen dat op de manier dat jij wilt. Maatwerk met een kwalitatieve afwerking!</p>
                      {/* <span><a href={frontRouter.SERVICES}>lees meer</a></span> */}
             
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-12">
                  <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center">
                      <div className="d-flex flex-column text-center justify-content-center align-content-center align-items-center figure-rounded my-5">
                        <img width="100%" height="100%"  src={wheelbarrow} alt="wheelbarrow"></img>
                      </div>
                  
                      <h3>fundering</h3>
                      <p>Ook voor al uw kelderbouw, vloerplaten en zwembaden in gewapend beton is LMG-Bouwwerken uw geknipte partner. In betonwerken...</p>
          
                      <span><a href={frontRouter.SERVICES}>lees meer</a></span>
                    </div>
                  </div>
               
            </div>
            </section>
        <hr></hr>

      {/* PROJECTEN START */}
        <section className="bg-primary py-5">
          <section className="container d-flex flex-column text-center justify-content-center align-content-center align-items-center">
            <h1>Realisaties</h1>
            <h2>onze projecten</h2>
            <div class="d-flex flex-row"></div>
         
            <div className="row my-5" id="insta-output">
                <div class="my-5">Er zijn op dit moment geen projecten gepubliceerd</div>
            </div>
            <a href={frontRouter.PROJECTS} class="btn m-3">projecten</a>
          </section>
        </section>
      {/* CONTACT */}
        <section className="bg-secondary py-5">
          <section className="container py-5 d-flex flex-column text-center justify-content-center align-content-center align-items-center">
            <h1>Wij bouwen jou project!</h1>
            <h2>Vertel ons erover</h2>
            <a href={frontRouter.CONTACT} class="btn m-5">Contacteer ons</a>
          </section>
        </section>
        </main>
    );
  }
}

export default Projects;