import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/BookingsTabs.css'
import LoaderIcon from '../assets/loader.gif'
import BookingsTab from './BookingsTab'

// GET DATA FROM API
const getData = async (setBookingsData) => {

    try{
        const res = await axios.get(process.env.REACT_APP_DATA_API)
        const allBookings = { 
            ...res.data.offline_bookings,
            ...res.data.online_bookings
        }
        const allBookingsKeys = Object.keys(allBookings)
    
        // Get array of bookings to display
        const bookings = {
            active: [],
            completed: [],
            cancelled: []
        }
        allBookingsKeys.forEach((bookingKey) => {
            const booking = allBookings[bookingKey]
            const {
                 bookingStatus,
                 bookingEpochTime,
                 userName,
                 workshopImage,
                 packageTitle,
                 paymentMode,
                 offlineBooking
            } = booking
    
            // check if data is usable
            const valid = bookingStatus && userName && workshopImage && packageTitle && paymentMode && bookingEpochTime
    
            if(valid){
                const bookingItem = {
                    bookingStatus,
                    name: userName,
                    date: bookingEpochTime,
                    details: packageTitle,
                    mode: paymentMode,
                    offlineBooking,
                    image: workshopImage
                }
             
                if(bookingStatus === "SUCCESS")
                    bookings.active.push(bookingItem)
                
                else if(bookingStatus === "CANCELLED")
                    bookings.cancelled.push(bookingItem)
    
                else if(bookingStatus === "COMPLETED")
                    bookings.completed.push(bookingItem)
            }
        })
        bookings.active.sort((booking1, booking2) => booking2.date - booking1.date)
        bookings.completed.sort((booking1, booking2) => booking2.date - booking1.date)
        bookings.cancelled.sort((booking1, booking2) => booking2.date - booking1.date)
        console.log(bookings.active.map((booking) => booking.date))
        setBookingsData(bookings)
    }
    catch(err){
        console.error(err.message)
    }
}

function BookingsTabs() {

    const [bookingsData, setBookingsData] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0)
    const tabs = ['Active','Completed','Cancelled']

    useEffect(function(){ getData(setBookingsData) }, [])

    return (
    <>
        <div className="tabs-container">
        {
            tabs.map((tab,index) => {
                return (
                    <div key={index} className="tab-header" onClick={() => setSelectedTab(index)}>
                        <p className={`tab-header-info ${selectedTab === index ? 'selected-tab' : ''}`}>
                            {tabs[index]}
                        </p>
                        <div className={selectedTab === index ? 'pill-border' : 'disabled'}></div>
                    </div>
                )
            })
        }
        </div>
        
        { bookingsData ? 
            <BookingsTab bookings={bookingsData[tabs[selectedTab].toLowerCase()]} /> 
            : <img id="loader-icon" alt="loading" src={LoaderIcon} /> 
        }
    </>
    )
}

export default BookingsTabs