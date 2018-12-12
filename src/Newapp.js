import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';






const Newapp = () =>{
        <Router>
        <div>
            <Links />
        <Route exact path="/" component ={Home}/>
        <Route path="/about" component ={About}/>
        </div>
        </Router>
    }
        
    const Links = () =>{
     <ul>
    <li><NavLink activeClassName="selected" exact to ="/">Home</NavLink></li>
    <li><NavLink activeClassName="selected" to ="/about">About</NavLink></li>
    
    
     </ul>
        
        }
        
        
            const Home = () =>{
                <div>
                    <h2>Home Page</h2>
               
                </div>
                
                }
            const About = () =>{
                <div>
                    <h2>About Page</h2>
              
                </div>
                
                }


export default Newapp   