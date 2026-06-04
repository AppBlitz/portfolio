
import "./css/contact.css"
export default function Contact() {
  return (
    <div id="div_form">
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label id="subject_form">Subject</label>
          <input type="text" name="subject" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea rows={10} cols={10} name="message"></textarea>
        </div>
        <button id="button_send">
          Send
        </button>
      </form >
    </div>
  );
}
