import React from 'react';
import Header from '../../components/Header';
import minhaFoto from '../assets/foto-angelica.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Angelica Pedroso</h1>
      <h2>Estudante de Desenvolvimento Web Full-Stack</h2>
      <figure>
        <img
          style={ { width: 200 } }
          src={ minhaFoto }
          alt='angelica-pedroso'
        />
      </figure>
    </div>

  );
}
