import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  type MouseEvent,
} from 'react';
import type { TripSearchProps } from '../types';
import { formatDateDisplay } from './utils';

const TripSearch = ({ filters, handleSubmit }: TripSearchProps) => {
  const [dateValue, setDateValue] = useState(filters.date ?? '');

  useEffect(() => {
    setDateValue(filters.date ?? '');
  }, [filters.date]);

  const dateDisplay = useMemo(() => formatDateDisplay(dateValue), [dateValue]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  const openDatePicker = (
    event: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>,
  ) => {
    const input = event.currentTarget as HTMLInputElement & {
      showPicker?: () => void;
    };
    input.showPicker?.();
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const searchFilters = {
      departure: (formData.get('departure') as string) ?? '',
      destination: (formData.get('destination') as string) ?? '',
      date: (formData.get('date') as string) ?? '',
    };

    handleSubmit(searchFilters);
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-900 to-purple-400 px-4 pt-24 pb-8">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <form
          role="search"
          onSubmit={onSubmit}
          className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,1fr))_auto_auto] gap-4">
            <div className="flex flex-col">
              <input
                id="from"
                type="text"
                name="departure"
                defaultValue={filters.departure ?? ''}
                placeholder="Departure"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <input
                id="to"
                type="text"
                name="destination"
                defaultValue={filters.destination ?? ''}
                placeholder="Destination"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col relative w-full md:w-auto md:self-center">
              <div className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium bg-white pointer-events-none whitespace-nowrap">
                {dateDisplay}
              </div>
              <input
                id="date"
                type="date"
                name="date"
                aria-label="Travel date"
                value={dateValue}
                onChange={handleDateChange}
                onFocus={openDatePicker}
                onClick={openDatePicker}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <div className="flex flex-col md:items-center md:justify-center">
              <button
                type="submit"
                className="w-full md:w-auto md:h-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
              >
                <span role="img" aria-label="Search trips">
                  🔍
                </span>
                <span className="ml-2">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TripSearch;
