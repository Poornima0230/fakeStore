export const Contact = () => {
  return (
    <section className="container contact-container">
      <h1>Contact Us</h1>
      <h2>Get in touch with us.I always here to help you.</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/xqalzreb"
        method="POST"
        data-aos="fade-up"
      >
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" placeholder="Enter Your Name" />
        </div>
        <div>
          <label htmlFor="email"> Email</label>
          <input type="email" name="email" placeholder="abc@gmail.com" />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="subject"
            placeholder="Your Main Title"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            rows={8}
            cols={10}
            name="message"
            placeholder="Enter Your Message"
          />
        </div>
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </section>
  );
};
