import React from 'react';
import Header from '../../components/Header';
import minhaFoto from '../../assets/foto-angelica.png';
import { BsCodeSlash } from 'react-icons/bs';
import './styles.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="text">
          <h1>Angélica Pedroso</h1>
          <h2>Estudante de Desenvolvimento Web Full-Stack</h2>
          <BsCodeSlash style={ { fontSize: '40px' } }/>
        </div>
        <figure>
          <img
            src={ minhaFoto }
            alt='angelica-pedroso'
          />
        </figure>
      </div>
    </div>
  );
}
