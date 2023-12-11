import React from 'react';
import './projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BreakoutImage from './Breakout.png';
import ReRouteImage from './ReRoute.png';
import ChatBotImage from './ChatBot.png';
import ServiceCatalogueImage from './serviceCatalogue.png';

function Projects() {
  const desc =
    'More current and past projects can also be found on my github page.';
  const apps = [
    {
      name: 'Service Catalogue K8s',
      description:
        'Bally’s Graduate Project: Developed an Internal Kubernetes Service Catalogue. Deployment automated onto cloud domain utilising Gitlab CI/CD pipelines.',
      image: ServiceCatalogueImage,
    },
    {
      name: 'ReRoute',
      description:
        'Graph traversal application that extends pathfinding algorithms to route train stations across the UK.',
      image: ReRouteImage,
    },

    {
      name: 'ChatBot',
      description:
        'A general-purpose chat bot built to serve multiple functions: stores and manages usernames, prompts day to day commands.',
      image: ChatBotImage,
    },
    {
      name: 'Breakout',
      description:
        "Brick Breaker game made in Java practising Object Oriented principles and Bob's coding convention",
      image: BreakoutImage,
    },
  ];

  return (
    <div>
      <section className='project-container ' id='projects'>
        <p className='project-title'>Projects</p>
        <p className='paragraph-container '>{desc}</p>

        <div
          className='app-container'
          style={{ display: 'grid', justifyContent: 'center' }}
        >
          {apps.map((app, index) => (
            <Card key={index} sx={{ maxWidth: 300, margin: '16px' }}>
              <CardMedia sx={{ height: 180 }} image={app.image} />
              <CardContent>
                <Typography gutterBottom variant='h7' component='div'>
                  {app.name}
                </Typography>
                <Typography color='text.secondary' fontSize={'12px'}>
                  {app.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
