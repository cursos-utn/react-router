import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function PostsVer() {
  const params = useParams();

  const [post, setPost] = React.useState({});

  React.useEffect(async () => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id);
    setPost(respuesta.data);
  }, [params]);

  return (
    <>
      <h1>Ver un Posteo</h1>
      <p>Ejemplo de recepción de parámetros por medio de la URL</p>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <Link to="/posts">Volver al listado de Posts</Link>
    </>
  );
}

export default PostsVer;
