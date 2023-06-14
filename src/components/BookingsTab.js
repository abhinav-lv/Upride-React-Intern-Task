import { useState, useMemo, useEffect } from 'react';
import '../styles/BookingsTab.css'
import Pagination from '../components/Pagination';

// Maximum no. of bookings to show in one page
const PageSize = 8;

// If package details exceed 28 characters, display shortened string
const limitDetails = (details) => {
    const length = details.length
    if(length > 24)
        return details.slice(0,22) + '...'
    return details
}

const BookingsTab = ({ bookings }) => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => setCurrentPage(1), [bookings])

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return bookings.slice(firstPageIndex, lastPageIndex); // eslint-disable-next-line
    }, [currentPage, bookings]);
  
    return (
        <div className="bookings-container">
            <div className="table-container">
                <div className="table-header">
                    <p>Name</p>
                    <p>Date</p>
                    <p>Package Details</p>
                    <p>Payment Mode</p>
                </div>

                {
                currentTableData.map((booking,index) => {
                    return (
                        <div key={index} className="booking-data">

                            {/* User Name and Profile Picture */}
                            <div className="booking-name-container">
                                <img id="booking-user-icon" src={booking.image} alt="🚫"/>
                                <p className="booking-name">{booking.name}</p>
                            </div>

                            {/* Booking Date */}
                            <p className="booking-date">
                                {new Date(booking.date).toDateString().split(" ").slice(1).join(" ")}
                            </p>

                            {/* Booking Details */}
                            <p className="booking-details">
                                {limitDetails(booking.details)}
                            </p>

                            {/* Payment Mode */}
                            <p className={`booking-payment-mode ${booking.offlineBooking ? 'offline' : 'online'}`}>
                                {`${booking.offlineBooking ? 'Offline' : 'Online'} Payment`}
                            </p>
                        </div>    
                    )
                })
                }
            </div>

            {/* Pagination component */}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={bookings.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}

export default BookingsTab