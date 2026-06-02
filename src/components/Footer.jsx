const Footer = () => {
    const footerData = [
        { title: "Support", links: ["Help Center", "Safety", "Cancellation"] },
        { title: "Hosting", links: ["Help your home", "Hosting resources"] },
        { title: "Airadb", links: ["Newsroom", "Careers", "Investors"] },
    ];

    return (
    <footer className="footer-container">
      <div className="footer-grid">
        {footerData.map((section, idx) => (
          <div key={idx} className="footer-column">
            <h4 className="footer-title">{section.title}</h4>
            {section.links.map((link, i) => (
              <a key={i} href="#" className="footer-link">{link}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Airbnb Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;