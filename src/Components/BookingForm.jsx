import React, { useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handelChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handelSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" onChange={e => handelChange(e.target.value)} vlaue={date} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose time</label>
                            <section id='book-time' value={times} onChange={e => setTimes(e.target.vlaue)}>
                                <option value="">select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(
                                        availableTimes => {
                                            return <option value="" key={availableTimes}>{availableTimes}</option>
                                        }
                                    )
                                }
                            </section>
                        </div>
                        <div>
                            <label htmlFor="book-qguests">Number of Guests</label>
                            <input id="book-qguests" onChange={e => setGuests(e.target.value)} vlaue={guests} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">occasion</label>
                            <select name="" id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option >Bbirthday</option>
                                <option >Anniversary</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input type="submit" value={"make yor reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm