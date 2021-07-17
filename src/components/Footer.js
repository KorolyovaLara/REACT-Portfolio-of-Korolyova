import React from "react";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-item">
        Find me on:
        <a
          href="https://github.com/KorolyovaLara/"
          target="_blank"
          rel="noreferrer"
          class="github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/korolyova/"
          target="_blank"
          rel="noreferrer"
          class="linkedin"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div class="footer-item">
        Email me:
        <a href="mailto:korolyovalara@gmail.com" class="email">
          <i class="fas fa-envelope-open-text"></i>
        </a>
      </div>
      <div class="footer-item">
        Check my resume:
        <a
          href="https://drive.google.com/file/d/1IZHpvLahr5Wzi3xr9b-RsNHqqFYR2_Gi/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          class="resume"
        >
          <i class="far fa-file-pdf"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
