import { Link } from 'react-router-dom';
import stoneRhino from '../../assets/StoneRhino.jpg';
import licenseNews from '../../assets/piranha-games-got-a-license-extension-with-microsoft-for-v0-5wrpg3b76usg1.jpg';
import battleTechGameplay from '../../assets/Gif-game-1-1.gif';
import mechWarriorFive from '../../assets/MechWarrior5mercenaries.jpg';
import mechWarriorFiveClans from '../../assets/MechWarrior5clans.jpg';

function HomePage() {
  return (
    <main className="home-page">
      <section className="splash-hero" aria-labelledby="splash-title">
        <div className="splash-copy">
          <p className="eyebrow">A living science-fiction universe · since 1984</p>
          <h2 id="splash-title">The future is fought one ’Mech at a time.</h2>
          <p>
            For centuries, Great Houses and mercenary commands have battled
            across the Inner Sphere. BattleTech began as a tabletop game and
            grew into a sprawling universe of novels, computer games, and an
            animated series.
          </p>
          <div className="welcome-actions">
            <a className="primary-link" href="#history">Explore the history</a>
            <Link className="secondary-link" to="/r/Battletech">Join the community</Link>
          </div>
        </div>
        <nav className="splash-jump-links" aria-label="Explore BattleTech">
          <a href="#history">History</a>
          <a href="#books">Books</a>
          <a href="#computer-games">Computer games</a>
          <a href="#animated-series">Animated series</a>
        </nav>
      </section>

      <section className="home-section history-section" id="history">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A short history</p>
            <h2>From tabletop battles to a universe</h2>
          </div>
          <p className="section-summary">
            The setting spans centuries of shifting alliances, lost technology,
            and wars fought by towering BattleMechs.
          </p>
        </div>

        <div className="history-timeline">
          <article className="history-stop">
            <span className="history-year">1984</span>
            <h3>The tabletop game</h3>
            <p>
              FASA publishes the original game of tactical Battledroid before changing its name to BattleTech.
              Players command machines, manage heat and ammunition, and shape
              battles across a detailed science-fiction setting.
            </p>
          </article>
          <article className="history-stop">
            <span className="history-year">1986 onward</span>
            <h3>The stories expand</h3>
            <p>
              The Warrior Trilogy helps turn the setting into an ongoing saga
              of House politics, mercenary campaigns, and the struggle for
              control of the Inner Sphere.
            </p>
          </article>
          <article className="history-stop">
            <span className="history-year">1988 onward</span>
            <h3>New ways to play</h3>
            <p>
              The Crescent Hawk’s Inception and the MechWarrior series bring
              BattleTech to computer screens, followed by strategy games and
              modern reimaginings.
            </p>
          </article>
          <article className="history-stop">
            <span className="history-year">1994 onward</span>
            <h3>Across the screen</h3>
            <p>
              BattleTech reaches television with an animated series, while
              video games continue to let players step into the cockpit or
              command a full lance.
            </p>
          </article>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Choose your entry point</p>
            <h2>One universe, many ways to explore</h2>
          </div>
        </div>
        <div className="lore-grid">
          <article className="lore-card" id="books">
            <span className="lore-number">01 / READ</span>
            <h3>Books &amp; fiction</h3>
            <p>
              BattleTech novels follow MechWarriors, mercenaries, and ruling
              families through generations of conflict. The Warrior Trilogy is
              a classic starting point; later series carry the timeline into
              new eras.
            </p>
            <a href="https://www.sarna.net/wiki/List_of_BattleTech_Novels" target="_blank" rel="noopener noreferrer">
              Browse the novel list <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="lore-card" id="tabletop">
            <span className="lore-number">02 / PLAY</span>
            <h3>Tabletop BattleTech</h3>
            <p>
              The original miniatures game is a turn-based contest of
              positioning, heat management, and risk. Build a force, choose
              your ’Mechs, and play out battles on the tabletop.
            </p>
            <a href="https://www.battletech.com/" target="_blank" rel="noopener noreferrer">
              Visit the BattleTech site <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="lore-card" id="computer-games">
            <span className="lore-number">03 / TAKE THE CONTROLS</span>
            <h3>Computer games</h3>
            <p>
              Pilot a single ’Mech in the MechWarrior games, or command a
              company in turn-based BattleTech and MechCommander. Each puts a
              different part of the conflict in your hands.
            </p>
            <div className="lore-links">
              <a href="https://store.steampowered.com/app/637090/BATTLETECH/" target="_blank" rel="noopener noreferrer">Harebrained Schemes’ BattleTech <span aria-hidden="true">↗</span></a>
              <a href="https://www.piranha-games.com/games/mechwarrior-5-mercenaries/" target="_blank" rel="noopener noreferrer">MechWarrior 5: Mercenaries <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="lore-card" id="animated-series">
            <span className="lore-number">04 / WATCH</span>
            <h3>Animated series</h3>
            <p>
              The 1994 BattleTech animated series follows Adam Steiner and
              the defenders of Somerset during the Clan invasion. It offered
              a new generation a televised view of the ’Mech battles.
            </p>
            <a href="https://www.sarna.net/wiki/BattleTech_(TV_series)" target="_blank" rel="noopener noreferrer">
              Read about the series <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Explore the community</h2>
          </div>
          <Link className="text-link" to="/creators">Creator directory <span aria-hidden="true">→</span></Link>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <img src={stoneRhino} alt="Stone Rhino, also known as the Behemoth" />
            <div>
              <h3>The Stone Rhino</h3>
              <p>The Stone Rhino, also known as the Behemoth, quite possibly my favorite battle mech and with Big Red-40TECH devolving its history just helps give the BattleTech lore depth.</p>
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
              <p>Take command of a BattleMech in this first-person action game, and follow the story of Commander Jake Mason or just play the universe.</p>
              <a href="https://mw5mercs.com/" target="_blank" rel="noopener noreferrer">
                Visit MW5 Mercenaries
              </a>
            </div>
          </article>

          <article className="feature-card">
            <img src={mechWarriorFiveClans} alt="MechWarrior 5: Clans" />
            <div>
              <h3>MechWarrior 5: Clans</h3>
              <p>Experience the might of the Clans as a trueborn Clan warrior, starting with Clan Smoke Jaguar.</p>
              <a href="https://mw5clans.com/" target="_blank" rel="noopener noreferrer">
                Visit MW5 Clans
              </a>
            </div>
          </article>

          <article className="feature-card feature-card-text">
            <div>
              <h3>MechWarrior 5: Mods</h3>
              <p>Explore the community of mods for MechWarrior 5, including new ’Mechs, maps, and gameplay features.</p>
              <a href="https://store.epicgames.com/all-mods/mechwarrior-5?sortBy=installs&sortDir=DESC&count=40" target="_blank" rel="noopener noreferrer">
                Visit MW5 Mods
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
