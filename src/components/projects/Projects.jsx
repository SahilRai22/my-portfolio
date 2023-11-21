import React from 'react';
import GitHubAPI from './GitHubAPI';
import './projects.css';

function Projects() {
  return (
    <div>
      <section className='project-container ' id='projects'>
        <h2 className='project-title'>Projects</h2>
        <GitHubAPI />
      </section>
    </div>
  );
}

export default Projects;
