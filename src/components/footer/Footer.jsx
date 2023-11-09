import React from "react";

import "./footer.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />

      <section className="footer-info">
        <section className="footer-info-center">
          <section className="footer-info__name">
            Sahil C Rai <br /> Software Engineer
          </section>
        </section>

        <section className="footer-info-center">
          <section className="footer-info__email">email.com</section>
        </section>

        <section className="footer-info-right">
          <section className="footer-info__number">Socials</section>
        </section>
      </section>
    </section>
  );
}

export default Footer;
