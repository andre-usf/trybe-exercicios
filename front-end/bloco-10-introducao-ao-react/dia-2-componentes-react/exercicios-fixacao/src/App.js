import React from 'react';
import Image from './Image';
import './App.css';

/*
Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem ou o texto: Cute cat staring, caso a imagem não consiga ser carregada.
*/

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Imagem de gato' />
      </main>
    );
  }
}

export default App;
