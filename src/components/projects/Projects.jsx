import React from 'react';
import './projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BreakoutImage from './Breakout.png';
import ReRouteImage from './ReRoute.png';
import ChatBotImage from './ChatBot.png';

function Projects() {
  const desc =
    'More current and past projects can also be found on my github page.';
  const apps = [
    {
      name: 'Breakout',
      description:
        'Brick Breaker game made in Java practising Object Oriented principles.',
      image: BreakoutImage,
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
  ];

  return (
    <div>
      <section className='project-container ' id='projects'>
        <p className='project-title'>Projects</p>
        <p className='paragraph-container '>{desc}</p>

        <div className='app-container'>
          {apps.map((app, index) => (
            <Card key={index} sx={{ maxWidth: 500, margin: '16px' }}>
              <CardMedia sx={{ height: 220 }} image={app.image} />
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
