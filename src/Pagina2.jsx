import React from 'react';
import { Link } from 'react-router-dom';

function Pagina1() {
  return (
    <div>
      <p>Pagina 2</p>
      <Link to="/">Ir a la pagina 1</Link>
      <br />
      <Link to="/posts">Ir a posteos</Link>
    </div>
  );
}

export default Pagina1;
