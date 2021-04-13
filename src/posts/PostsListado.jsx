import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostsListado() {
  const [listado, setListado] = React.useState([]);

  React.useEffect(async () => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setListado(respuesta.data);
  }, []);

  return (
    <>
      <h1>Listado de Posteos</h1>
      <p>Ejemplo de paso de parámetros por medio de una ruta/URL a otro componente</p>
      <ul>
        {listado.map((unPost) => (
          <li>
            <Link to={'/posts/' + unPost.id}>{unPost.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsListado;
