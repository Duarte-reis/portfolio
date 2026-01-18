import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SendBtn from './SendBtn';

const SERVICE_ID = 'service_udck57j';
const TEMPLATE_ID = 'template_7yvalx4';
const PUBLIC_KEY = 'mdVcV8sSF_9k6_LBx';

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = () => {
    setIsLoading(true);
    setStatus('');

    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setStatus('success');
          setIsLoading(false);
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
          
          setTimeout(() => {
            setStatus('');
          }, 3000);
        },
        (error) => {
          console.error('Error:', error.text);
          setStatus('error');
          setIsLoading(false);
          
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      );
  };

  return (
    <div className="form_container">
      <div className="input_group" id="name_group">
        <label htmlFor="name"></label>
        <input
          ref={nameRef}
          type="text"
          placeholder="Your name *"
          id="name"
          name="name"
          required
        />
      </div>

      <div className="input_group" id="email_group">
        <label htmlFor="email"></label>
        <input
          ref={emailRef}
          type="email"
          placeholder="Your email *"
          id="email"
          name="email"
          required
        />
      </div>

      <div className="input_group" id="message_group">
        <label htmlFor="message"></label>
        <textarea
          ref={messageRef}
          id="message"
          placeholder="Your message *"
          name="message"
          required
        ></textarea>
      </div>

      <div className="form_feedback">
        {status === 'error' && (
            <div>Error. Try again.</div>
        )}
      </div>

      <div className="submit_btn">
        <SendBtn
          text={status === 'success' ? 'Sent' : (isLoading ? 'Sending...' : 'Confirm')}
          onClick={sendEmail}
          disabled={isLoading || status === 'success'}
          showCheckmark={status === 'success'}
        />
      </div>
    </div>
  );
}

export default ContactForm;