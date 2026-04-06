import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>Job Portal</h3>
            <p>
              Your gateway to endless career opportunities. Search, apply, and
              connect with top employers all in one place.
            </p>
          </div>

          {/* Features Section */}
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Job Search & Filters</li>
              <li>Company Profiles</li>
              
              <li>Real Time Update</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Lets connect:</p>
            <p>Email: shreeyakumari03@gmail.com</p>
            <p>Phone: 234-567-8901</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Job Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
