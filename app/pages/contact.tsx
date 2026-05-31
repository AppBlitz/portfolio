import "./css/contact.css"
export default function Contact() {
  return (
    <div id="div_form">
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label id="subject_form">Subject</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea rows={4} cols={3}></textarea>
        </div>
        <button id="button_send">
          Send
        </button>
      </form >
    </div>
  );
}
