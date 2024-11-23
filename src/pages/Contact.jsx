const Contact = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <h2 className="section-title">Get in Touch</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card hover-effect">
            <div className="card-body">
              <h5 className="mb-4 text-center">Feel free to reach out to me!</h5>
              <div className="d-flex align-items-center mb-3">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:justinmalate666@gmail.com" className="text-decoration-none">
                    justinmalate666@gmail.com
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Phone:</strong>
                  <br />
                  09948894660
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted">Thank you for visiting my page!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;