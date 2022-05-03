import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav class = "brown darken-4">
            <div class='nav-wrapper'>
                <Link to='/' class='brand-logo'>
                    Bar Shop
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
