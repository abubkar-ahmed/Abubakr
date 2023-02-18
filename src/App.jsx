import { useEffect, useState} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Project from './components/Project'
import Projects from './components/Projects'
import {db} from './firebase';
import { collection, query, getDocs } from "firebase/firestore";
import NotFound404 from './components/NotFound404'


function App() {

  const { pathname } = useLocation();
  const [projects , setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {
    getAllProjects()
  },[])

  const getAllProjects = async () => {
    const q = query(collection(db, "audioBK"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProjects(prev => {
        return [...prev , {
          id : doc.id,
          ...doc.data()
        }];
      })
    });
  }
  
  return (
    <>
    {projects.length > 0 && (
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/about' element={<AboutMe/>} />
            <Route 
              path='/projects' 
              element={<Projects projects={projects}/>} 
            />
            <Route path='/contact' element={<Contact/>} />
            <Route 
              path='project/:projectId' 
              element={<Project projects={projects}/>}
            />
            <Route path='/*' element={<NotFound404/>}/>
          </Routes>
        </main>

        <Footer/>
      </div>
    )}
    </>

  )
}

export default App
