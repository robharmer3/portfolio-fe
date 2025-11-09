export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>

      <div className="contact-container">
        <img src="/src/assets/linkedin.png" alt="linkedin logo" />
        <p className="contact-title">LinkedIn</p>
        <p>https://www.linkedin.com/in/rmharmer39/</p>
      </div>
      <div className="contact-container">
        <img src="/src/assets/github.png" alt="github logo" />
        <p className="contact-title">GitHub</p>
        <p>https://github.com/robharmer3</p>
      </div>
      <div className="contact-container">
        <img src="/src/assets/email.png" alt="email logo" />
        <p className="contact-title">Email</p>
        <p className="contact-content">rob.harmer3@gmail.com</p>
      </div>
      <div className="contact-container">
        <img src="/src/assets/location.png" alt="location logo" />
        <p className="contact-title">Location</p>
        <p className="contact-content">Bolton, England</p>
      </div>
    </div>
  );
}
