import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 p-4">
        <h1 className="text-center text-primary mb-4">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
