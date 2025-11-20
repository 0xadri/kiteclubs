import { useParams } from 'react-router';
import { mockUsers } from '../../features/trip-search/mocks/mockUsers';

function getMonthYear(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

const User = () => {
  const { id } = useParams();
  const user = mockUsers.find((u: any) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            User not found
          </h2>
          <p className="text-gray-600">
            We couldn't find the user you're looking for.
          </p>
        </div>
      </div>
    );
  }

  const totalTripsOrganized = user.tripsOrganized.completed + user.tripsOrganized.cancelled;
  const totalTripsJoined = user.tripsJoined.completed + user.tripsJoined.cancelled;
  const completionRate = Math.round(
    ((user.tripsOrganized.completed + user.tripsJoined.completed) /
      (totalTripsOrganized + totalTripsJoined)) *
      100
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-900 to-purple-400 px-4 pt-24 pb-32">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-linear-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg shrink-0">
                {user.firstName.charAt(0)}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {user.firstName} {user.lastName.charAt(0)}.
                </h1>
                <p className="text-gray-500 mt-1">
                  Member since {getMonthYear(user.signedUpDate)}
                </p>

                {/* Tags */}
                {user.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                    {user.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                      >
                        ⭐ {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="font-bold text-gray-900">
                      {totalTripsOrganized + totalTripsJoined}
                    </span>{' '}
                    total trips
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="font-bold text-green-600">
                      {completionRate}%
                    </span>{' '}
                    completion rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 space-y-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600 leading-relaxed">{user.description}</p>
            </div>

            <hr className="border-gray-100" />

            {/* Trip Stats */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trip History</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Trips Organized */}
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Trips Organized
                  </h3>
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-3xl font-bold text-blue-700">
                        {user.tripsOrganized.completed}
                      </div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                    {user.tripsOrganized.cancelled > 0 && (
                      <>
                        <div className="h-8 w-px bg-gray-300"></div>
                        <div>
                          <div className="text-2xl font-semibold text-red-600">
                            {user.tripsOrganized.cancelled}
                          </div>
                          <div className="text-sm text-gray-600">Cancelled</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Trips Joined */}
                <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Trips Joined
                  </h3>
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-3xl font-bold text-purple-700">
                        {user.tripsJoined.completed}
                      </div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                    {user.tripsJoined.cancelled > 0 && (
                      <>
                        <div className="h-8 w-px bg-gray-300"></div>
                        <div>
                          <div className="text-2xl font-semibold text-red-600">
                            {user.tripsJoined.cancelled}
                          </div>
                          <div className="text-sm text-gray-600">Cancelled</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Languages
                  </h3>
                  <div className="flex items-start gap-2 text-gray-700">
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
                      className="mt-0.5 shrink-0 text-purple-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>Speaks {user.languages.join(', ')}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <div className="flex items-start gap-2 text-gray-700">
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
                      className="mt-0.5 shrink-0 text-purple-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>
                      Lives in {user.homeBase.city}, {user.homeBase.country}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Contact
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
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
                        className="shrink-0 text-gray-400"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
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
                        className="shrink-0 text-gray-400"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Car Details
                  </h3>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600 shrink-0"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">
                        {user.carDetails.brand} {user.carDetails.model}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {user.carDetails.color} • {user.carDetails.year} •{' '}
                        {user.carDetails.km}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Kitesurfing Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Kitesurfing Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {user.kitesurfSkills.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
