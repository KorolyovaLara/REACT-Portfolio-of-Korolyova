import React from "react";

function Footer() {
  return (
    <div class="footer mt-auto py-3">
      <div class="footer-item">
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
        <a href="mailto:korolyovalara@gmail.com" class="email">
          <i class="fas fa-envelope-open-text"></i>
        </a>
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
