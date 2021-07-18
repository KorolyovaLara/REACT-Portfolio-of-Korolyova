import React from "react";

export default function Contact() {
  return (
    <div class="row flex-lg-row align-items-center p-5 gx-0">
      <div class="col-lg-6">
        <img
          src="src/components/images/contact.png"
          alt="Lara Korolyova"
          class="d-block mx-lg-auto img-fluid"
          height="500"
          loading="lazy"
        ></img>
      </div>
      <div class="col-lg-6 p-3">
        <h1 class="fw-bold lh-1 mb-3">Get in touch with me today.</h1>
        <p class="lead">Hello there. My name is Lara Korolyova.</p>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
      </div>
</div>


      </div>
    </div>
  );
}
