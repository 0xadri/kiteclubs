import type { FormEvent } from 'react';
import type { TripSearchProps } from '../types';

const TripSearch = ({ filters, handleSearch }: TripSearchProps) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="flex flex-col items-center justify-center text-center py-8 px-6 bg-surf-sand/80">
      <form role="search" onSubmit={handleSubmit}>
        <label htmlFor="departure">Search Trip:</label>
        <input
          type="text"
          name="departure"
          id="departure"
          value={filters.departure}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Go</button>
      </form>
    </section>
  );
};

export default TripSearch;
