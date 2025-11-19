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

const TripSearch = ({ filters, handleSubmit }: TripSearchProps) => {
  const [dateValue, setDateValue] = useState(filters.date ?? '');

  useEffect(() => {
    setDateValue(filters.date ?? '');
  }, [filters.date]);

  const formatDateDisplay = (value: string) => {
    if (!value) {
      return 'Date';
    }

    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) {
      return 'Date';
    }

    const weekdayFormatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
    });
    const dayFormatter = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
    });
    const monthFormatter = new Intl.DateTimeFormat('en-GB', {
      month: '2-digit',
    });

    const weekday = weekdayFormatter.format(date);
    const day = dayFormatter.format(date);
    const month = monthFormatter.format(date);

    return `${weekday}. ${day}/${month}`;
  };

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
    <section className="relative bg-gradient-to-br from-aqua-500 via-aqua-400 to-sand-300 px-4 pt-24 pb-8">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <form role="search" onSubmit={onSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,1fr))_auto_auto] gap-4">
            <div className="flex flex-col">
              <input
                id="from"
                type="text"
                name="departure"
                defaultValue={filters.departure ?? ''}
                placeholder="Departure"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-col">
              <input
                id="to"
                type="text"
                name="destination"
                defaultValue={filters.destination ?? ''}
                placeholder="Destination"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
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
                className="w-full md:w-auto md:h-full bg-aqua-500 hover:bg-aqua-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span role="img" aria-label="Search trips">
                  🔍
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TripSearch;
