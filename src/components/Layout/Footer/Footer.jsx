import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className='footer'>
      <div className='social'>
        <a href='https://ro-ro.facebook.com/'>
          <i className='fab fa-facebook fa-2x'></i>
        </a>
        <a href='https://twitter.com/?lang=ro'>
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <a href='https://www.youtube.com/'>
          <i className='fab fa-youtube fa-2x'></i>
        </a>
        <a href='https://ro.linkedin.com/'>
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
      </div>
      <p>Copyright &copy; 2020 - Stefan Gruescu</p>
    </footer>
  );
}

export default Footer;
