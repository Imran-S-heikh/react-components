import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import ButtonRipple from './components/button-ripple/ButtonRipple.component';



function App() {

  const firstParentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="D(f) Ai(c) Jc(c) H(100vh)">
      <ButtonRipple>Hello World</ButtonRipple>
    </div>
  );
}

export default App;
