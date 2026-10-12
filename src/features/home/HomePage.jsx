import { Link } from 'react-router-dom';
import stoneRhino from '../../assets/StoneRhino.jpg';
import licenseNews from '../../assets/piranha-games-got-a-license-extension-with-microsoft-for-v0-5wrpg3b76usg1.jpg';
import battleTechGameplay from '../../assets/Gif-game-1-1.gif';
import mechWarriorFive from '../../assets/MechWarrior5mercenaries.jpg';

function HomePage() {
  return (
    <main className="home-page">
      <section className="welcome-panel">
        <p className="eyebrow">Your BattleTech community hub</p>
        <h2>Stories, games, and creators from across the Inner Sphere</h2>
        <p>
          Browse community discussions, catch up on franchise news, and find
          creators sharing BattleTech content.
        </p>
        <div className="welcome-actions">
          <Link className="primary-link" to="/r/Battletech">Browse Reddit</Link>
          <Link className="secondary-link" to="/creators">Meet the creators</Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Explore BattleTech</h2>
          </div>
          <Link className="text-link" to="/creators">Creator directory <span aria-hidden="true">→</span></Link>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <img src={stoneRhino} alt="Stone Rhino, also known as the Behemoth" />
            <div>
              <h3>The Stone Rhino</h3>
              <p>A heavily armed Clan Smoke Jaguar assault ’Mech, also known as the Behemoth.</p>
              <a href="https://youtu.be/W2F2e1VqJEE?si=vmxKtitFy1LBhrut" target="_blank" rel="noopener noreferrer">
                Watch Big Red-40TECH’s history video
              </a>
            </div>
          </article>

          <article className="feature-card">
            <img src={licenseNews} alt="Community post about the BattleTech game license extension" />
            <div>
              <h3>BattleTech game license news</h3>
              <p>Piranha Games announced an extension to its license for BattleTech games.</p>
              <a href="https://www.reddit.com/r/battletech/comments/15l7h8c/piranha_games_got_a_license_extension_with/" target="_blank" rel="noopener noreferrer">
                Read the Reddit discussion
              </a>
            </div>
          </article>

          <article className="feature-card">
            <img src={battleTechGameplay} alt="BattleTech mech combat gameplay" />
            <div>
              <h3>Harebrained Schemes’ BattleTech</h3>
              <p>Turn-based tactical combat set in the BattleTech universe.</p>
              <a href="https://www.reddit.com/r/Battletechgame/" target="_blank" rel="noopener noreferrer">
                Visit r/BattleTechGame
              </a>
              <div className="feature-subLinks">
                <a href="https://www.bta3062.com/index.php?title=Main_Page" target="_blank" rel="noopener noreferrer">BattleTech Advanced</a>
                <a href="https://roguetech.fandom.com/wiki/Roguetech_Wiki" target="_blank" rel="noopener noreferrer">Roguetech</a>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <img src={mechWarriorFive} alt="MechWarrior 5: Mercenaries" />
            <div>
              <h3>MechWarrior 5: Mercenaries</h3>
              <p>Take command of a BattleMech in this first-person action game.</p>
              <a href="https://www.piranha-games.com/games/mechwarrior-5-mercenaries/" target="_blank" rel="noopener noreferrer">
                Visit Piranha Games
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
