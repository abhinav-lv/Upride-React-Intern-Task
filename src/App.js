/* IMPORT STYLES */
import './styles/App.css'

/* IMPORT ASSETS */
import UprideLogo from './assets/upride-logo.png'
import UprideText from './assets/upride-text.png'
import SearchIcon from './assets/search-icon.png'
import PlusIcon from './assets/plus-icon.svg'
import ProfilePic from './assets/profile.png'
import BookingsIcon from './assets/BookingsIcon.png'

/* IMPORT COMPONENTS */
import DropDown from './components/DropDown'
import NavBar from './components/NavBar'
import BookingsTabs from './components/BookingsTabs'

/* ------------------------------------------------------ */

/* Function to handle Search submit */
const handleSubmit = (e) => {
  e.preventDefault()
}

/* ------------------------------------------------------ */

function App() {

  return (
    <div className="container">

      {/* MENU  */}
      <div className="menu">

        {/* Logo Box */}
        <div className="logo-box">
          <img id="logo" src={UprideLogo} alt="upride-logo" />
          <img id="upride-text-logo" src={UprideText} alt="upride" />
        </div>

        {/* Dropdown component */}
        <DropDown/>

        {/* NavBar component */}
        <NavBar/>

      </div>

      {/* MAIN */}
      <div className="main">

        {/* Top Bar */}
        <div className="top-bar">

          {/* Search box */}
          <div className="search-container">
            <form className="search-form" action="/" onSubmit={handleSubmit}>
              <input type="text" placeholder="Search bookings" name="search" />
              <button type="submit">
                <img id="search-icon" src={SearchIcon} alt="search-icon"/>
              </button>
            </form>
          </div>

          {/* New Booking Button */}
          <button className="new-booking">
            <img id="plus-icon" src={PlusIcon} alt="add-booking-icon"/>
            <p>New Booking</p>
          </button>

          {/* Profile Box */}
          <div className="profile-box">
            <img id="profile-pic-main" src={ProfilePic} alt="profile-pic"/>
            <p>Hello Lokesh!</p>
            <p>👋</p>
          </div>

        </div>

        {/* Bookings */}
        <div className="bookings">
          <div className="heading">
            <h1>View Bookings</h1>
            <img id="bookings-icon" src={BookingsIcon} alt="bookings-icon"/>
          </div>
          <BookingsTabs/>
        </div>
      </div>

    </div>
  )
}

export default App