import React, {Component} from 'react';
import './navBar.css';
import { SocialMedia, Pages } from './NavItems';

class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul className="socials-container">
                    {SocialMedia.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}></a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="pages-container">
                    {Pages.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>{item.page}</a>
                            </li>
                        )
                    })}                
                </ul>  
            </div>
        )
    }
}

export default Nav;