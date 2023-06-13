import { useState } from 'react'
import '../styles/NavBar.css'
import HomeIcon from '../assets/HomeIcon.png'
import EarningsIcon from '../assets/EarningsIcon.png'
import ServicesIcon from '../assets/ServicesIcon.png'
import AssetsIcon from '../assets/AssetsIcon.png'

function NavBar() {

    const links = [
        { icon: HomeIcon, title: 'Home' },
        { icon: EarningsIcon, title: 'My Earnings' },
        { icon: ServicesIcon, title: 'My Services' },
        { icon: AssetsIcon, title: 'My Assets' },
    ]

    const [selected, setSelected] = useState(0)

    return (
        <div className="navbar">
        {
            links.map((link,index) => {
                return (
                    <div key={index} 
                        className={selected === index ? 'navlink selected' : 'navlink'}
                        onClick={() => setSelected(index)}
                    >
                        <img 
                            id={link.title}
                            src={link.icon} 
                            alt={`${link.title}-icon`}
                        />
                        <p>{link.title}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default NavBar