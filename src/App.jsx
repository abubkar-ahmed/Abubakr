import { useEffect, useState} from 'react'
import {db} from './firebase';
import { collection, query, getDocs } from "firebase/firestore";
import { SideBar } from './components/nav/SideBar'
import { Heading } from './components/nav/Heading'
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';



function App() {

  const [projects , setProjects] = useState([]);
  const [filesLinks , setFilesLinks] = useState({});

  useEffect(() => {
    getAllProjects();
    getAllfiles();
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
  const getAllfiles = async () => {
    const q = query(collection(db, "files"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setFilesLinks(prev => {
        return {...prev , resume : doc.data().resume}
      })
    });
  }

  
  
  return (
    <>
    {projects.length > 0 && (
      <div className="App">
        <div className="home">
          <SideBar/>
          <main>
            <Heading resume={filesLinks?.resume}/>
            <Hero/>
            <About/>
            <Projects projects={projects}/>
            <Contact/>
            <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
            />
          </main>
        </div>
      </div>
    )}
    </>

  )
}

export default App
