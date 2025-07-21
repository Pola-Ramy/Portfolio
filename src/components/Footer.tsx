"use client";

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/pola.king.980',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/pola_ramy18',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/pola-ramy-',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:Polaramy2004@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV file
    const link = document.createElement('a');
    link.href = '/POLA-CV.pdf'; // Updated to the correct path
    link.download = 'POLA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/201555368611', '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
        {/* Contact and Social - now centered and main content */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Description */}
          <div className="flex flex-col items-center lg:items-start max-w-md w-full">
            <p className="text-gray-300 text-center">
              Trusted by clients for delivering professional, high-quality websites tailored to your business needs. Let me help you make a lasting impression online.
            </p>
          </div>
          {/* Project Call-to-Action */}
          <div className="flex flex-col items-center max-w-xs w-full ">
            <p className="text-lg font-semibold text-white text-center mb-4">Have a Project in Mind?</p>
            <button className="btn-secondary text-sm " onClick={handleWhatsAppContact}>Let's do that!</button>
          </div>
          {/* Social and Contact */}
          <div className="flex flex-col items-center max-w-xs w-full space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button
              onClick={handleDownloadCV}
              className="btn-secondary text-sm"
            >
              Download CV
            </button>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center w-full">
          <p className="text-gray-300">
            © {new Date().getFullYear()} POLA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 