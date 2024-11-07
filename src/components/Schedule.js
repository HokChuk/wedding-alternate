import React from "react";
import "../styles/App.css";
import { Chrono } from "react-chrono";

export default function Schedule() {
    const items = [{
          cardTitle: "Lorem Ipsum",
          cardSubtitle:"sample details"
        }, {
            cardTitle: "Lorem Ipsum",
            cardSubtitle:"sample details"
        }, {
            cardTitle: "Lorem Ipsum",
            cardSubtitle:"sample details"
        }, {
            cardTitle: "Lorem Ipsum",
            cardSubtitle:"sample details"
        }, {
            cardTitle: "Lorem Ipsum",
            cardSubtitle:"sample details"
        }];

  return (
    <div className="App">
      <div>
        <Chrono
          mode= 'VERTICAL_ALTERNATING'
          disableToolbar
          items= {items}
          cardHeight =' 50'
          timelinePointDimension= {40}
          slideShow
          slideItemDuration= {500} 
          slideShowType = 'reveal'
          theme={{
            primary: 'gray',
            secondary: 'white',
            cardBgColor: '#D5ADA5',
            cardTitleColor: 'black',
            cardSubtitleColor: 'black'
          }}
        />
      </div>
    </div>
  );
}