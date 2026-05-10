import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="hero-overlay" />
      <div className="hero-copy">
        <h1><Link to="/">BattleTech Reddit & Official News</Link></h1>
        <p>Search Reddit threads and follow official developer updates in one place.</p>
      </div>
    </header>
  );
}

export default Header;
