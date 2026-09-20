export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact</h1>
        <p>For general inquiries, please contact me at:</p>
        <p>
          John Doe<br/>
          123 Main St<br />
          Anytown, USA 12345<br />
          <a href="tel:1234567890">(123) 456-7890</a><br />
          <a href="mailto:john.doe@example.com">john.doe@example.com</a>
        </p>
        <p>For job opportunities, please contact HR at:</p>
        <p>
          HR Department<br/>
          Human Resources<br />
          Anytown, USA 12345<br />
          <a href="tel:1234567890">(123) 456-7890</a><br />
          <a href="mailto:hr@example.com">hr@example.com</a>
        </p>
      </div>
    </div>
  );
}
