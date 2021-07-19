import React from "react";

export default function Contact() {
  return (
    <div class="row flex-lg-row-reverse align-items-center p-5 gx-0">
      <div class="col-lg-6">
        <img
          src="contact.png"
          alt="Contact Me"
          class="d-block mx-lg-auto img-fluid"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6 p-3">
        <h5 class="border-bottom border-4 mb-3">Contact Me</h5>
        <h1 class="fw-bold lh-1 mb-3">
        Get in touch with me today.
        </h1>
        <div class="row">
          <p>If you wanna get in touch, talk to me about a project collaboration or just say hi, send me a message below and let's talk.</p>
          <div class="col">
            <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Your Email" aria-label="yourEmail@mail.com" />
          </div>
        </div>
        <div class="input-group mt-3 mb-3">
            <span class="input-group-text">Your Message</span>
            <textarea class="form-control" aria-label="Your Message" />
            
        </div>
        <button type="button" class="btn btn-outline-dark">Send Message</button>
      </div>
    </div>
    );
}
