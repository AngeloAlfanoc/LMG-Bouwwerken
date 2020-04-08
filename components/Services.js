import React, { Component } from 'react';
import Blueprint from '../assets/svg/018-blueprint.svg'
import Crane from '../assets/svg/005-crane.svg'
import wheelbarrow from '../assets/svg/029-wheelbarrow.svg'

class Projects extends Component {
  render() {
    return (
      <main id='services'>
       <div className="container-fluid">
          <div className="container py-5">
            <h3>ons aanbod</h3>
            <p className="pb-5">LMG-Bouwwerken is een jong bedrijf dat kan terugvallen op de jarenlange ervaring die zijn zaakvoerder kon opbouwen binnen de woning- en appartementenbouw bij grotere bouwbedrijven in de BeNeLux. Als snel bleek dat hij een enorm talent heeft voor het vak.  Door zijn enorme uithoudings vermogen en gedrevenheid kan hij in no-time jouw plannen omzetten van tekening naar realiteit. Een bouwvakker waar je echt op kan rekenen.</p> 
          <div id="constructie" className="d-flex flex-wrap flex-row my-5">
            <div className="col-lg-6 col-sm-12 d-flex flex-column align-content-center align-items-center pb-5">
              <div className="d-flex text-center justify-content-center align-content-center align-items-center figure-rounded">
                <img width="100%" height="100%"  src={Blueprint} alt="blueprint"></img>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12  d-flex flex-column justify-content-center pt-1">
              <h3>constructie</h3>
              <p>Door het bouwproces te organiseren als een cirkel van continue opvolging en begeleiding die steunt op de kennis van ‘open minded’ specialisten, leveren wij onze constructies af met een betekenisvolle meerwaarde wij zorgen ervoor dat jou constructie er staat en voorzichzelf spreekt. </p>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid bg-secondary">
        <div className="container py-5">
          <div className="d-flex flex-wrap flex-row-reverse my-5">
            <div className="col-lg-6 col-sm-12 d-flex flex-column align-content-center align-items-center pb-5">
              <div className="d-flex text-center justify-content-center align-content-center align-items-center figure-rounded">
                <img width="100%" height="100%"  src={Crane} alt="crane"></img>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center pt-1">
              <h3>Daken</h3>
              <p>Totaal renovatie van je dak, ofwel slopen en nieuw, wij doen dat op de manier dat jij wilt.
Maatwerk met een kwalitatieve afwerking!
</p>
            </div>
          </div>
        </div>
       </div>
       <div className="container-fluid">
        <div className="container  py-5">
          <div className="d-flex flex-wrap flex-row my-5">
            <div className="col-lg-6 col-sm-12 d-flex flex-column align-content-center align-items-center pb-5">
              <div className="d-flex text-center justify-content-center align-content-center align-items-center figure-rounded my-5">
                <img width="100%" height="100%"  src={ wheelbarrow} alt="wheelbarrow"></img>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center pt-1">
              <h3>Fundering</h3>
              <p>Ook voor al uw kelderbouw, vloerplaten en zwembaden in gewapend beton is LMG-Bouwwerken uw geknipte partner. In betonwerken zijn we al vele jaren actief. Zo hebben we heel wat referenties en een uitstekende reputatie opgebouwd in zowel de openbare als private sector.</p>
            </div>
          </div>
          </div>
       </div>

      
      </main>
    );
  }
}

export default Projects;