const Footer = () => {
  const footerSections = [
    {
      title: "Airbnb Support",
      links: ["Help Center", "AirCover", "Anti-discrimination", "Disability support"]
    },
    {
      title: "Hosting",
      links: ["Host your home", "AirCover for Hosts", "Hosting resources", "Community forum"]
    },
    {
      title: "About",
      links: ["Newsroom", "New features", "Careers", "Investors"]
    }
  ];

  return (
    <footer style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #DDDDDD', padding: '48px 0', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0 20px' }}>
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>{section.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {section.links.map((link, i) => (
                <li key={i} style={{ marginBottom: '12px', fontSize: '14px', color: '#717171', cursor: 'pointer' }}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 20px', borderTop: '1px solid #DDDDDD', paddingTop: '20px', fontSize: '14px', color: '#222222' }}>
        © 2026 AirADB Clone, Inc. · Privacy · Terms · Sitemap
      </div>
    </footer>
  );
};

export default Footer;
