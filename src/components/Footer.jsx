import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <h5 className="text-white mb-3">Justin Malate</h5>
            <p className="text-light mb-3">
              Computer Science Student at Naga College Foundation, Inc.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/just9.14" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://github.com/t9-14" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/justin-malate" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 mb-3">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/education" className="text-light text-decoration-none">Education</Link>
              </li>
              <li className="mb-2">
                <Link to="/hobbies" className="text-light text-decoration-none">Hobbies</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 mb-3">
            <h5 className="text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                justinmalate666@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-phone me-2"></i>
                09948894660
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Naga City, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <hr className="bg-light" />
            <p className="text-center text-light mb-0">
              © {new Date().getFullYear()} Justin Malate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;