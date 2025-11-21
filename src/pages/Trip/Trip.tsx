import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { useTrip } from '../../features/trip-search/hooks/useTrip';
import {
  formatDateDisplay,
  formatDepartureTime,
  formatReturnTripETA,
  getCurrencySymbol,
} from '../../features/trip-search/components/utils';

const Trip = () => {
  const { tripId } = useParams();
  const { trip, isLoading, error } = useTrip(tripId);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {error || 'Trip not found'}
          </h2>
          <p className="text-gray-600">
            We couldn't find the trip you're looking for.
          </p>
        </div>
      </div>
    );
  }

  const isDayTrip = trip.isReturnTrip && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);
  const driverFirstName = trip.driver?.firstName || 'Unknown';
  const formattedDepartureTime = formatDepartureTime(trip.departureTime);
  const formattedReturnETA = formatReturnTripETA(trip.returnTripETA);
  const dateDisplay = formatDateDisplay(trip.startDate);
  const isCancelled = trip.status === 'cancelled';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    trip.vaguePickupPoint,
  )}`;

  const cancellationReasonText = {
    weather: 'Due to unfavorable weather conditions',
    vehicle_issue: 'Due to vehicle maintenance issues',
    insufficient_riders: 'Due to insufficient riders',
    driver_unavailable: 'Driver became unavailable',
    safety_concerns: 'Due to safety concerns',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-900 to-purple-400 px-4 pt-24 pb-32">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {isCancelled && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span className="font-bold text-lg">Trip Cancelled</span>
                </div>
                {trip.cancellationReason && (
                  <p className="mt-2 text-sm text-red-700">
                    {cancellationReasonText[trip.cancellationReason]}
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 ${isCancelled && 'line-through decoration-2'}`}>
                {trip.departure} <span className="text-gray-400">🡒</span>{' '}
                {trip.destination}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:gap-6 mt-0">
                {/* Date & Time Section */}
                <div className="flex items-center gap-3 text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {dateDisplay}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {formattedDepartureTime}
                  </span>
                </div>
                {/* Tags Section */}
                <div className="flex flex-wrap gap-4 md:ml-6 mt-4 md:mt-0">
                  {isDayTrip && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Day Trip
                    </span>
                  )}
                  {trip.isReturnTrip && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Return
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Section */}
      <main className="max-w-4xl mx-auto px-4 -mt-23 pb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 space-y-4">
            {/* Header: Driver Details (left) & Price/Seats (right) side-by-side */}
            <div className="flex flex-row items-center justify-between gap-4 w-full">
              {/* Driver Details */}
              <Link
                to={`/user/${trip.driver?.id}`}
                className="flex items-center gap-4 flex-2 md:flex-1 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  {driverFirstName.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {driverFirstName}
                  </p>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium">
                      {trip.driverRating.toFixed(1)}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{trip.driverTripsCompleted} rides</span>
                  </div>
                </div>
              </Link>
              {/* Price & Seats (right aligned) */}
              <div className="flex flex-col items-end">
                <span className={`text-3xl font-bold text-purple-600 ${isCancelled && 'line-through decoration-2'}`}>
                  {currencySymbol}
                  {trip.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    trip.seats === 1 ? 'text-red-600' : 'text-gray-500'
                  }`}
                >
                  {trip.seats} seat{trip.seats !== 1 && 's'} left
                </span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {trip.title}
            </h2>

            {/* Description */}
            <div className="prose prose-purple max-w-none">
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {trip.description}
              </p>
            </div>

            {/* Return ETA Info */}
            {trip.isReturnTrip && (
              <div className="bg-green-50/50 border-l-2 border-green-400 rounded px-3 py-2">
                <p className="text-xs text-gray-700 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M12 6v6l4 2" />
                    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                  </svg>
                  <span>Return ETA: {formattedReturnETA}</span>
                </p>
              </div>
            )}

            {/* Special Request Message */}
            {trip.specialRequestMsg && (
              <div className="bg-blue-50/50 border-l-2 border-blue-400 rounded px-3 py-2 -mt-1">
                <p className="text-xs text-gray-700">
                  If you have a special request (i.e. extra detour or extra luggage), ask before you book.
                </p>
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column: Luggage Allowance */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Luggage Allowance
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {Array.isArray(trip.luggageAllowance) ? (
                    trip.luggageAllowance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))
                  ) : (
                    <li>{trip.luggageAllowance}</li>
                  )}
                </ul>
              </div>

              {/* Right column: Pickup Area (top), Riders Confirmed (bottom) */}
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Pickup Area
                  </h3>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="group-hover:underline">
                      {trip.vaguePickupPoint}
                    </span>
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Riders Confirmed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {trip.riders.map((rider, index) => (
                      <Link
                        key={index}
                        to={`/user/${rider.id}`}
                        className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm border-2 border-white ring-1 ring-gray-100 hover:opacity-80 transition-opacity cursor-pointer"
                        title={`${rider.firstName} ${rider.lastName}`}
                      >
                        {rider.firstName.charAt(0)}
                      </Link>
                    ))}
                    {trip.riders.length === 0 && (
                      <span className="text-gray-400 italic">
                        No riders yet. Be the first!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Footer: Car Details, Share, Book */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Car Details */}
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl py-3 px-5 relative flex-1 md:flex-none md:min-w-[150px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700 absolute top-4 right-5"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-0 pr-[50px]">
                  {trip.carBrand} {trip.carModel}
                </h3>
                <div className="text-sm text-gray-600 mt-0">
                  {trip.carColor}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button 
                  className={`flex-1 md:flex-none font-bold py-3 px-8 rounded-xl transition-colors shadow-lg text-white ${
                    isCancelled 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700 hover:shadow-xl active:scale-95 cursor-pointer'
                  }`}
                  disabled={isCancelled}
                >
                  {isCancelled ? 'Trip Cancelled' : 'Book Ride'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trip;
