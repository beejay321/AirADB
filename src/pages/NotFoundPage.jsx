import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/" className="not-found-link">
        Back to homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;