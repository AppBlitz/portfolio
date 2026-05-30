export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <label></label>
        </div>
        <div>
          <label>Subject</label>
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
        <button>
          Send
        </button>

      </form >
    </div >
  );
}
