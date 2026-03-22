import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { fetchPostComments, selectCommentsStatus, selectComments, selectCommentsError } from './commentsSlice';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { humanDate } from '../../utils/date';

function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const post = useMemo(() => posts.find((p) => p.id === id), [posts, id]);

  const commentsStatus = useSelector(selectCommentsStatus);
  const comments = useSelector(selectComments);
  const commentsError = useSelector(selectCommentsError);

  useEffect(() => {
    if (post) dispatch(fetchPostComments(post.permalink));
  }, [post, dispatch]);

  if (!post) {
    return (
      <div className="post-detail-page">
        <p>Post not found. <button onClick={() => navigate(-1)}>Back</button></p>
      </div>
    );
  }

  const html = post.selftext ? DOMPurify.sanitize(marked.parse(post.selftext || '', { breaks: true })) : '<p>No text content available.</p>';

  return (
    <div className="post-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <article className="post-detail-card">
        <h2>{post.title}</h2>
        <p>r/{post.subreddit} • u/{post.author} • {humanDate(post.created_utc)}</p>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <strong>{post.score}</strong> points • <strong>{post.num_comments}</strong> comments
        </p>
        <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">Open on Reddit</a>
      </article>

      <section className="comments-section">
        <h3>Comments</h3>
        {commentsStatus === 'loading' && <p>Loading comments...</p>}
        {commentsStatus === 'failed' && <p>Error: {commentsError}</p>}
        {commentsStatus === 'succeeded' && comments.map((c) => (
          <div key={c.id} className="comment-card">
            <p><strong>u/{c.author}</strong> • {humanDate(c.created_utc)}</p>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(c.body_html || c.body || '', { breaks: true })) }} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default PostDetailPage;
