import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © {new Date().getFullYear()} Kayna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;