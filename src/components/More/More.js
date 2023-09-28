import './More.css';

export default function More({ handleLoadMore }) {
  return (
    <section className="more">
      <button className="more__button" type="button" onClick={handleLoadMore}>
        Ещё
      </button>
    </section>
  );
}
