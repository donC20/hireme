import React from 'react'
import ReactDOM from 'react-dom'
import ContentSection from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './css/navbar.css'
import './css/searchbar.css'
import './index.css'
import './css/index_animate.css'

// landing section
// ReactDOM.render(<><LandingSection /></>,document.getElementById('home-landing'));

// content section
ReactDOM.render(<><ContentSection/></>,document.getElementById('root'));
