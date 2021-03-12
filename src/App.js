import React, {useState} from 'react'
import './App.css';

function App() {
  const [hor, sethor] = useState(10)
  const [ver, setver] = useState(10)
  const [blur, setblur] = useState(10)
  const [color, setcolor] = useState('rgb(0 196 255)')


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
       <h6>color </h6>
        <input type="color" onChange={e=> setcolor(e.target.value)} value={color}/>
        </p>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${hor}px ${ver}px ${blur}px`, background: `${color}`}}></div>
      </div>
    </div>
  );
}

export default App;
