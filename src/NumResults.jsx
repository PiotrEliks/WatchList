export default function NumResults({ movies }) {
  if (!movies.length) return;

  return(
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}