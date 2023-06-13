import { useState } from 'react'
import '../styles/DropDown.css'
import DropDownIcon from '../assets/DropDownIcon.png'
import LocationIcon from '../assets/LocationIcon.png'

function DropDown() {

    const [isOpen, toggleOpen] = useState(true);

    return (
        <div className="dropdown-container">
            <div className="header">
                <img id="menu-location-icon" src={LocationIcon} alt="location-icon"/>
                <p>Rajarajeshwari Nagar</p>
                <img 
                    id="menu-dropdown-icon" 
                    src={DropDownIcon} 
                    alt="dropdown-icon" 
                    onClick={() => toggleOpen(!isOpen)} 
                    className={isOpen ? '' : 'rotate-left'}
                />
            </div>
            <div className={isOpen ? 'branches' : 'branches hidden'}>
                <form>
                    <div className="branch">
                        <label htmlFor="branch-1">Branch 2</label>
                        <input id="branch-1" type="radio" name="branch" value="Branch 1" />
                    </div>
                    <div className="br"></div>
                    <div className="branch">
                        <label htmlFor="branch-1">Branch 3</label>
                        <input id="branch-1" type="radio" name="branch" value="Branch 1" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DropDown