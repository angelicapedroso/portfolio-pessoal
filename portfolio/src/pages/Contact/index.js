import React from 'react';
import Header from '../../components/Header';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import './styles.css';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact">
        <h1>Contato</h1>
        <nav className="contact_container">
          <a href='https://github.com/angelicapedroso'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={ { fontSize: '40px' } } />
            angelicapedroso
          </a>
          <br></br>
          <a href='https://www.linkedin.com/in/angelicapedroso'
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={ { fontSize: '40px' } } />
            Angélica Pedroso
          </a>
          <br></br>
          <a href='mailto:contatoangelicapedroso@gmail.com'
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail style={ { fontSize: '40px' } } />
            contatoangelicapedroso@gmail.com
          </a>
          <br></br>
          <a href='https://wa.me/message/P4Q2PCD52SGBP1'
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp style={ { fontSize: '40px' } } />
            (33) 999766586
          </a>
        </nav>
      </div>
    </div>
  );
}
