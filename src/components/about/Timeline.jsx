import { Chrono } from 'react-chrono';
import React from 'react';
import uon from './uon.png';

function TimeLine() {
  const timelineElements = [
    {
      title: ['September 2023 ', ' - Present'],
      cardTitle: 'Ballys Interactive',
      cardSubtitle: 'Graduate Software Engineer',
      cardDetailedText: ['Rotational graduate scheme'],
      source: {
        src: { uon },
        type: 'png',
      },
      type: 'IMAGE',
      timelineContent: <div>Custom content</div>,
    },
    {
      title: ['September 2019 ', ' - June 2023'],
      cardTitle: 'University of Nottingham',
      cardSubtitle: 'BSc Computer Science',
      cardDetailedText: ['paragraph1', 'paragraph2'],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: ['September 2021 ', ' - June 2022'],
      cardTitle: 'World Line Solutions',
      cardSubtitle: 'Group Project Lead',
      cardDetailedText: ['paragraph1', 'paragraph2'],
      timelineContent: <div>Custom content</div>,
    },
  ];

  return (
    <div
      style={{
        width: '1200px',
        height: '950px',
        marginRight: '15%',
        marginLeft: '15%',
        marginTop: '5%',
      }}
    >
      <Chrono
        items={timelineElements}
        enableOutline
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
