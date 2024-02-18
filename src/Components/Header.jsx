import React from 'react'
import { Link } from "react-router-dom";
import bannerImg from "./assat/restauranfood.jpg"
function  Header () {
        return <>
            <header className='header'>
                <section>
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>we are a family owned mediterraneran resturant, focused on traditional recipes serverd with a modern twist</p>
                        <Link to="/booking"><button aria-label='on click'>Reserve Table</button></Link>
                    </div>
                    <div className="banner-img">
                        <img src={bannerImg} alt="" />
                    </div>
                </section>
            </header>
        </>
}

export default Header