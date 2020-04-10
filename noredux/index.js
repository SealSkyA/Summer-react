import React from 'react';
import ReactDom from 'react-dom';


//引入全局样式，字体控制js
import './utils/font';
import './assets/css/index.css'

import Default from "./layouts/default";

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './plugins/axios'

//在react应用内部创建全局属性
import {serverBaseUrl} from './server';
React.baseUrl = serverBaseUrl;
React.Component.prototype.baseUrl=serverBaseUrl;

ReactDom.render(
  <Router>
    <Route component={Default}/>
  </Router>
  ,
  document.querySelector('#root'),
  ()=>console.log('react-dom render')
)



