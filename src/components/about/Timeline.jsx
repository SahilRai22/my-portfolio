import { Chrono } from 'react-chrono';
import React from 'react';
import ballys from './ballys.jpg';
import uon from './uon.png';
import worldline from './worldline.jpg';

function TimeLine() {
  const timelineElements = [
    {
      title: ['September 2023 ', ' - Present'],
      cardTitle: 'Ballys Interactive',
      cardSubtitle: 'Graduate Software Engineer',
      cardDetailedText: ['Rotational graduate scheme'],
      timelineContent: (
        <img
          src={ballys}
          alt="Bally's logo"
          style={{
            width: '250px',
            height: '150px',
          }}
        ></img>
      ),
    },
    {
      title: ['September 2019 ', ' - June 2023'],
      cardTitle: 'University of Nottingham',
      cardSubtitle: 'BSc Computer Science',
      timelineContent: (
        <img
          src={uon}
          alt="Bally's logo"
          style={{
            width: '220px',
            height: '200px',
          }}
        ></img>
      ),
    },
    {
      title: ['September 2021 ', ' - June 2022'],
      cardTitle: 'World Line Solutions',
      cardSubtitle: 'Group Project Lead',
      timelineContent: (
        <img
          src={worldline}
          alt="Bally's logo"
          style={{
            width: '200px',
            height: '100px',
          }}
        ></img>
      ),
    },
  ];

  return (
    <div
      style={{
        marginRight: '30%',
        marginLeft: '30%',
        placeContent: 'center',
        marginTop: '5%',
      }}
    >
      <Chrono
        items={timelineElements}
        mode='VERTICAL_ALTERNATING'
        scrollable={{ scrollbar: true }}
        theme={{
          primary: 'grey',
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: 'black',
          titleColorActive: 'black',
        }}
      ></Chrono>
    </div>
  );
}

export default TimeLine;
