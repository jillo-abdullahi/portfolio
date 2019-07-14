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
                    <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
                      dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Event>
                    <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
                      dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Event>
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