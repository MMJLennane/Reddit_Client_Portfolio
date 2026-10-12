import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="hero-overlay" />
      <div className="hero-copy">
        <h1><Link to="/">BattleTech Community Hub</Link></h1>
        <p>Reddit discussions, franchise news, and creator links.</p>
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/r/Battletech">Reddit</NavLink>
        <NavLink to="/creators">Creators</NavLink>
      </nav>
    </header>
  );
}

export default Header;
