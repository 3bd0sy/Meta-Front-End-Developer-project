import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Nav from "./Nav"
import logo from "./assat/nav-logo.png"
import "./css/Header.css"

export class Header extends Component {
    static propTypes = {}

    render() {
        return <>
            <div className="h-continer">
                <img src={logo} alt="" height="100px" />
                <div>
                    <ul className='h-list'>
                        <li><a href="Home">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="contact">Contact Us</a></li>
                        <li><a href="search">Search</a></li>
                    </ul>
                </div>
            </div>
        </>
    }
}

export default Header