import { useState } from 'react';
import { useParams } from 'react-router';
import { useTrip } from '../../features/trip-search/hooks/useTrip';
import {
    formatDateDisplay,
    formatDepartureTime,
    getCurrencySymbol,
    getFirstName,
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

    const isDayTrip = trip.return && trip.startDate === trip.endDate;
    const currencySymbol = getCurrencySymbol(trip.priceCurrency);
    const firstName = getFirstName(trip.driverName);
    const formattedDepartureTime = formatDepartureTime(trip.departureTime);
    const dateDisplay = formatDateDisplay(trip.startDate);

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        trip.vaguePickupPoint
    )}`;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-900 to-purple-400 px-4 pt-24 pb-32">
                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="flex flex-col gap-2">
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
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {trip.departure} <span className="text-gray-400">🡒</span>{' '}
                                    {trip.destination}
                                </h1>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {isDayTrip && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Day Trip
                                        </span>
                                    )}
                                    {trip.return && (
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
            <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-6 md:p-8 space-y-8">
                        {/* Header: Driver Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
                                {trip.driverName.charAt(0)}
                            </div>
                            <div>
                                <p className="text-lg font-bold text-gray-900">
                                    {firstName}
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
                        </div>

                        <hr className="border-gray-100" />

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{trip.title}</h2>

                        {/* Description */}
                        <div className="prose prose-purple max-w-none">
                            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                                {trip.description}
                            </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Pickup */}
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
                                        className="mt-0.5 flex-shrink-0"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span className="group-hover:underline">
                                        {trip.vaguePickupPoint}
                                    </span>
                                </a>
                            </div>

                            {/* Luggage */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Luggage Allowance
                                </h3>
                                <div className="flex items-start gap-2 text-gray-600">
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
                                        className="mt-0.5 flex-shrink-0"
                                    >
                                        <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
                                        <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
                                    </svg>
                                    <p className="whitespace-pre-line">{trip.luggageAllowance}</p>
                                </div>
                            </div>

                            {/* Car */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Car
                                </h3>
                                <div className="flex items-center gap-2 text-gray-600">
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
                                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                        <circle cx="7" cy="17" r="2" />
                                        <path d="M9 17h6" />
                                        <circle cx="17" cy="17" r="2" />
                                    </svg>
                                    <span>
                                        {trip.carBrand} {trip.carModel} ({trip.carColor})
                                    </span>
                                </div>
                            </div>

                            {/* Riders */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Riders Confirmed
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {trip.riders.map((rider, index) => (
                                        <div
                                            key={index}
                                            className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm border-2 border-white ring-1 ring-gray-100"
                                            title={`${rider.riderFirstName} ${rider.riderLastName}`}
                                        >
                                            {rider.riderFirstName.charAt(0)}
                                        </div>
                                    ))}
                                    {trip.riders.length === 0 && (
                                        <span className="text-gray-400 italic">
                                            No riders yet. Be the first!
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Footer: Price, Share, Book */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-purple-600">
                                    {currencySymbol}
                                    {trip.price}
                                </span>
                                <span
                                    className={`text-sm font-medium ${trip.seats === 1 ? 'text-red-600' : 'text-gray-500'
                                        }`}
                                >
                                    {trip.seats} seat{trip.seats !== 1 && 's'} left
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
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

                                <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl active:scale-95">
                                    Book Ride
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
