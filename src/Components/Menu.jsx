import React from 'react'
import img from "./assat/desert.jpg"

function Menu() {
    const recipes = [
        {
            id: 1,
            title: "Greek salad",
            price: 12.99,
            image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
        },
        {
            id: 2,
            title: "Bruchetta",
            price: 5.99,
            image: "https://i.ibb.co/317GqZv/Bruchetta.png",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: 4.78,
            image: "https://i.ibb.co/sm6MfcH/desert.jpg",
            description:
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
    ];
    return (
        <div className="menu-container">
            <div className="meun-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(
                        rec => <div key={rec.id} className='menu-items'>
                            <img src={img} alt="" />
                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5>{rec.title}</h5>
                                    <p>{rec.price}</p>
                                </div>
                                <p>{rec.description}</p>
                                <button className='orderbtn'>Order Now</button>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Menu