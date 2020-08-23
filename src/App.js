import React, { useEffect, useState } from 'react';
import api from './services/api';

import Header from './components/Header';


import './App.css';


function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(
      response => {
        console.log(response.data);
        setProjects(response.data);
      }
    )
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
         title: 'ttttt',
         owner: 'fmkmkmfkmk'
    })
    const project = response.data;
    setProjects([...projects, project])
  }

  return (
    <>
      <Header />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)
        }
      </ul>
      <button type="button" onClick={handleAddProject}>salvar</button>
    </>
  )


}

export default App;