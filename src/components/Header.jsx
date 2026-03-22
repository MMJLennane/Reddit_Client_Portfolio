import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <h1><Link to="/">Reddit Client</Link></h1>
      <p>React + Redux Reddit Browser</p>
    </header>
  );
}

export default Header;
