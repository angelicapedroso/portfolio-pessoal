import React from 'react';
import Header from '../../components/Header';
import { BsCodeSlash } from 'react-icons/bs';
import './styles.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="text">
          <h1>ANGÉLICA PEDROSO <BsCodeSlash style={ { fontSize: '30px' } } /> </h1>
          <h2>DESENVOLVEDORA FRONT-END (BACK-END EM CONSTRUÇÃO)</h2>
        </div>
      </div>
    </div>
  );
}
