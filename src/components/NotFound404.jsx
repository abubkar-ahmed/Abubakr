import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound404() {

    const navigate = useNavigate();

  return (
    <section className='not-found'>
        <h2>404 Page Not Found.</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
    </section>
  )
}

export default NotFound404