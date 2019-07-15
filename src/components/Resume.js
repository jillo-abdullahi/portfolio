import React, { Component, Fragment } from 'react';
import Skillbar from 'react-skillbars';
import { Timeline, Event } from "react-timeline-scribble";


export default  class Resume extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <section id="resume">

      <div className="row work">
            <div className="twelve columns main-col">
              <div className="header-col">
                  <h1><span>Work Experience</span></h1>
              </div>
                <Fragment>
                  <Timeline>
                    {resumeData.work && resumeData.work.map(item => {
                      return (
                        <Event interval={item.timeOfStart + " - " +item.timeOfLeaving} title={item.companyName} subtitle={item.specialization}>
                          <ul>
                            {item.responsibilities && item.responsibilities.map(item => {
                              return(
                                <li>{item}</li>
                              )
                            })}
                          </ul>
                      </Event>
                      )

                    })}
                  </Timeline>
              </Fragment>
          </div>
            </div>
         <div className="row skill">
          <div className="twelve columns main-col">
              <div className="header-col">
                <h1><span>Technical skills</span></h1>
            </div>
   				<div className="bars">

           <Skillbar
              skills={resumeData.skills}
              colors = {{
                "bar": "#3498DA",
                "title": {
                  "text": "#fff",
                  "background": "#3498DA"
                }
              }}
                />

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}