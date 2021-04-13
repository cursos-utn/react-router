import React from 'react';
import { Link } from 'react-router-dom';

function Pagina1() {
  return (
    <div>
      <p>Pagina 1</p>
      <Link to="/pagina2">Ir a la pagina 2</Link>
      <br />
      <Link to="/posts">Ir a posteos</Link>
    </div>
  );
}

export default Pagina1;
