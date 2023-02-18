import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, NavLink, useLocation} from 'react-router-dom';


function Header() {

  const [menu , setMenu] = useState(false);
  const navRef = useRef();
  const ulRef = useRef(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const showNavbar = () => {
    if(menu){
        ulRef.current.classList.add('remove-animation');
        setTimeout(() => {
            setMenu( prevMenu => {
                return !prevMenu ;
            })
            navRef.current.classList.toggle('nav-responsive');
        },200);
    }else{
        ulRef?.current?.classList?.remove('remove-animation');
        setMenu( prevMenu => {
            return !prevMenu ;
        })
        navRef.current.classList.toggle('nav-responsive');
    }


  }

  const h1ClickHandler = () => {
    navigate('/')
  }

  useEffect(() => {
    if(menu){
        ulRef.current.classList.add('remove-animation');
        setTimeout(() => {
            setMenu( prevMenu => {
                return !prevMenu ;
            })
            navRef.current.classList.toggle('nav-responsive');
        },200);
    }
  },[pathname])


  return (
    <header>
        <div className="header-container">
            <h1 onClick={h1ClickHandler}>
            ABUBAKR
            </h1>
            <div className={menu ? 'ham active' : 'ham'} onClick={showNavbar}>
            <span className={menu ? 'span-1 active' : 'span-1'}></span>
            <span className={menu ? 'span-2 active' : 'span-2'}></span>
            <span className={menu ? 'span-3 active' : 'span-3'}></span>
            </div>
            <nav className= 'nav' ref={navRef}>
                <ul ref={ulRef}>
                    <li>
                    <NavLink to="/about">
                        <span>01.</span> About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/projects">
                        <span>02.</span> Projects
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">
                        <span>03.</span> Contact
                    </NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
  )
}

export default Header