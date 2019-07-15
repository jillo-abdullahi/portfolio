import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="twelve columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <div className="contact-form">
                <form className="form-inline" action="/action_page.php">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <textarea id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              </div>
            </div>
            <div className="four columns">
              <div className="well">
                <span><i class="fa fa-map-marker fa-lg"></i><span className="contact-info">Nairobi, kenya</span></span>
              </div>
              <div className="well">
                <span><i class="fa fa-phone fa-lg"></i><span className="contact-info">+254720471303</span></span>
              </div>
              <div className="well">
                <span><i class="fa fa-envelope fa-lg"></i><span className="contact-info">jillo.woche@andela.com</span></span>
              </div>
            </div>
          </div>
        </section>
        );
  }
}