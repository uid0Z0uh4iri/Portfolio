import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  @media (max-width: 960px) {
    padding: 40px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Button = styled.button`
  padding: 14px 28px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px ${({ theme }) => theme.primary + 90};
  }
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these with your EmailJS credentials
    emailjs.sendForm(
      'service_ql7sbs6',
      'template_guh0dce',
      form.current,
      'tS8AbmfYRIG-8J4Fe'
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Get In Touch</Title>
        <Desc>
          Feel free to reach out if you want to collaborate with me, or simply have a chat.
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" name="from_name" required />
          <Input type="email" placeholder="Your Email" name="from_email" required />
          <Input type="text" placeholder="Subject" name="subject" required />
          <TextArea 
            placeholder="Your Message" 
            rows="6" 
            name="message" 
            required 
          />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
