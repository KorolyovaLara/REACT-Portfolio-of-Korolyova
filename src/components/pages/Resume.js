import React from "react";

export default function Resume() {
  return (
    <div class="row flex-lg-row align-items-center p-5 gx-0">
      <div class="col-lg-6">
        <a href="https://drive.google.com/file/d/1IZHpvLahr5Wzi3xr9b-RsNHqqFYR2_Gi/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          class="resume">
          <img src="resume.png"
           alt="Resume"
           class="d-block mx-lg-auto img-fluid"
           loading="lazy">
          </img>
        </a>
      </div>
      <div class="col-lg-6 p-3">
        <h5 class="border-bottom border-4 mb-3">My Resume and Skills</h5>
        <p class="lead">Click on the picture to download my resume</p>

        <h4>My Skill Set</h4>
          <ul>           
            <li>HTML</li>  
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL and NoSQL</li>
            <li>GraphQL</li>
            <li>React</li>
          </ul>
        <h4>My Expertises</h4>
          <ul>
            <li>Accounting</li>            
            <li>Logistics</li>  
            <li>Management</li> 
            <li>Gaming</li>   
          </ul>        
        <h4>My Languages</h4>
          <ul>
            <li>Ukrainian</li>  
            <li>Russian</li>  
            <li>French</li>  
            <li>English</li>  
          </ul>
      </div>
    </div>
  );
}