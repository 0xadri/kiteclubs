export const formatDateDisplay = (value: string) => {
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

export const getCurrencySymbol = (currency: string): string => {
  const currencyMap: Record<string, string> = {
    euro: '€',
    eur: '€',
    dollar: '$',
    usd: '$',
    pound: '£',
    gbp: '£',
  };

  const normalized = currency.toLowerCase();
  return currencyMap[normalized] || currency.toUpperCase();
};

export const truncateDescription = (
  description: string,
  wordLimit: number = 10,
): string => {
  const words = description.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return description;
  }
  return `${words.slice(0, wordLimit).join(' ')}...`;
};

export const getFirstName = (fullName: string): string => {
  return fullName.trim().split(/\s+/)[0] || fullName;
};

export const formatDepartureTime = (timeString: string): string => {
  const timeMatch = timeString.match(/^(\d{2}):(\d{2})/);
  if (timeMatch) {
    return `${timeMatch[1]}:${timeMatch[2]}`;
  }
  return timeString;
};

