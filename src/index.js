import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals'
import Dashboard from './Dashboard'
import WebVis from './WebsiteVisitors'
import Stats from './Stats'

const dashboard = {
  widget: "Widget",
  reviews: "Reviews",
  customers: "Customers",
  onAn: "Online Analysis",
  settings: "Settings"
}
const stats = {
  reviews: 1281,
  avgRating: 4.6,
  analysis: [960,122,321]
}

const graph = {
  title: "Website Visitors",
  numViewers: 821,
  graphResults: []
}


ReactDOM.render(
  <React.StrictMode>
    <Dashboard dashboard={dashboard} />
    <Stats stats={stats} />
    <WebVis graph = {graph}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
