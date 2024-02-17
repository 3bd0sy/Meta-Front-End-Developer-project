
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Nav extends Component {
    static propTypes = {}

    render() {
        return <>
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="about">About Us</a></li>
                <li><a href="services">Services</a></li>
                <li><a href="contact">Contact Us</a></li>
                <li><a href="search">Search</a></li>
            </ul>
        </>
    }
}

export default Nav

