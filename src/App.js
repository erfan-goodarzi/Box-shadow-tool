import React, {useState} from 'react'
import './App.css';

function App() {
  const [hor, sethor] = useState(10)
  const [ver, setver] = useState(10)
  const [blur, setblur] = useState(10)


  return (
    <div className="App">
      <div className="controls">
        <p class="range-field">
          <label>horizontal lenght</label>
        <input type="range" min="-200" onChange={e=> sethor(e.target.value)} value={hor} max="200" />
        <label>Verticle lenght</label>
        <input type="range" min="-200" onChange={e=> setver(e.target.value)} value={ver} max="200" />
        <label>Blur</label>
        <input type="range" min="-200" onChange={e=> setblur(e.target.value)} value={blur} max="200" />
        </p>
      </div>
      <div className="output">
        <div className="box"></div>
      </div>
    </div>
  );
}

export default App;
