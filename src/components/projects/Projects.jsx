import React from 'react';
import GitHubAPI from './GitHubAPI';

function Projects() {
  return (
    <div>
      <section className='section' id='projects'>
        Projects
        <div>
          <GitHubAPI />
        </div>
      </section>
    </div>
  );
}

export default Projects;
