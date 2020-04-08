import React, { Component } from 'react';



class Contact extends Component {
  render() {
    return (
      <main id='contact'>
        <div class="container">
          <div className="d-flex flex-column align-content-center justify-content-center align-items-center contact-style my-5">      
            <form action="https://formspree.io/algemenebouwwerkenlmg@gmail.com" method="POST">
              <label className="mt-4" for="full-name">Uw Naam <small className="text-danger">*</small></label>
              <input type="text" name="name" id="full-name" placeholder="naam" required=""/>
              <label className="mt-4" for="email-address">Uw Email <small className="text-danger">*</small></label>
              <input type="email" name="_replyto" id="email-address" placeholder="email@domein.be" required=""/>
              <label className="mt-4" for="message">Boodschap <small className="text-danger">*</small></label>
              <textarea style={{height:200}} type="text" name="message"/>
              <input className="mt-3" type="submit" value="Verzenden"/>
              <small className="text-danger float-right">* vereist</small>
            </form>
          </div>
        </div>
        {/* <div class="bg-secondary">
          <div class="container-fluid m-0 p-0">
            <iframe title="location" width="100%" height="500" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.230711933297!2d5.580790415912387!3d51.048827651948365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d0a12474eb51%3A0x8951751d54f3b24f!2sBoekweitstraat%2060%2C%203660%20Opglabbeek!5e0!3m2!1sen!2sbe!4v1575487429947!5m2!1sen!2sbe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div> */}
      </main>
    );
  }
}

export default Contact;