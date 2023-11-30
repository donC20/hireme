import React from 'react'
import ReactDOM from 'react-dom'
import LandingSection from './landing';
import ContentSection from './contents';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './index.css'
import './components/css/navbar.css'
import './components/css/searchbar.css'
import './components/css/card_oppertnity.css'

// landing section
ReactDOM.render(<><LandingSection /></>,document.getElementById('home-landing'));

// content section
ReactDOM.render(<><ContentSection /></>,document.getElementById('content-section'));
