import React from "react";

function Footer() {

  // Create variable for companyName
  const companyName = "Cats4Lyf"

  // Create variable for date
  const newDate = new Date;
  const currentYear = newDate.getFullYear();

  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <a>&copy; {companyName} {currentYear}</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
