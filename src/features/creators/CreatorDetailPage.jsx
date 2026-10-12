import { Link, useParams } from 'react-router-dom';
import { creators } from './creators';

function CreatorDetailPage() {
  const { slug } = useParams();
  const creator = creators.find((item) => item.slug === slug);

  if (!creator) {
    return (
      <main className="creators-page">
        <section className="not-found-card">
          <h2>Creator not found</h2>
          <Link className="text-link" to="/creators">Browse all creators</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="creators-page">
      <Link className="back-link" to="/creators">← All creators</Link>
      <header className="page-intro creator-intro">
        <p className="eyebrow">Creator links</p>
        <h2>{creator.name}</h2>
        <p>Follow {creator.name} on these platforms.</p>
      </header>

      <nav className="creator-links" aria-label={`${creator.name} links`}>
        {creator.links.map(({ platform, url }) => (
          <a
            className="creator-link-card"
            href={url}
            key={platform}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{platform}</span>
            <span className="external-link-icon" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </main>
  );
}

export default CreatorDetailPage;
