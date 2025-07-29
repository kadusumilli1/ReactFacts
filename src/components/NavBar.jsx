import reactIcon from '../assets/reactjs-icon.png'

export default function NavBar() {
    return (
        <header>
            <nav>
                <img src={reactIcon} alt="React logo" />
                <span className="span-text">ReactFacts</span>
            </nav>
        </header>
    )
}
