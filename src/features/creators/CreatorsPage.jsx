import { Link } from 'react-router-dom';
import { creators } from './creators';

function CreatorsPage() {
  return (
    <main className="creators-page">
      <header className="page-intro">
        <p className="eyebrow">BattleTech community</p>
        <h2>Creators</h2>
        <p>Find the official pages and channels for BattleTech creators.</p>
      </header>

      <section className="creator-grid" aria-label="BattleTech creators">
        {creators.map((creator) => (
          <article className="creator-card" key={creator.slug}>
            <h3>{creator.name}</h3>
            <p>{creator.links.length} official links</p>
            <Link className="text-link" to={`/creators/${creator.slug}`}>
              View links <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default CreatorsPage;
