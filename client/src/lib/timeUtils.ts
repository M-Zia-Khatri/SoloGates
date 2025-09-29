// lib/timeUtils.ts

/**
 * Parses a 12-hour time string (e.g., "1:30pm") into a 24-hour format.
 * @returns { hours: number, minutes: number }
 */
const parse12HourTime = (timeStr: string) => {
  const match = timeStr.match(/(\d{1,2}):(\d{2})(am|pm)/);
  if (!match) return { hours: 0, minutes: 0 };

  let [, h, m, modifier] = match;
  let hours = parseInt(h, 10);
  const minutes = parseInt(m, 10);

  if (modifier === 'pm' && hours < 12) {
    hours += 12;
  }
  if (modifier === 'am' && hours === 12) {
    hours = 0; // Midnight case
  }
  return { hours, minutes };
};

/**
 * Formats a 24-hour time object into a 12-hour AM/PM string.
 */
const formatTo12HourTime = (hours: number, minutes: number): string => {
  const modifier = hours >= 12 ? 'pm' : 'am';
  const h = hours % 12 || 12; // Convert 0 or 12 to 12
  const m = minutes.toString().padStart(2, '0');
  return `${h}:${m}${modifier}`;
};

/**
 * Gets the UTC offset in hours for a given IANA time zone and date.
 * This is crucial for handling Daylight Saving Time correctly.
 * @returns The offset in hours (e.g., -4, 5.5).
 */
const getOffsetInHours = (timeZone: string, date: Date): number => {
  const formatter = new Intl.DateTimeFormat('en', {
    timeZone,
    timeZoneName: 'longOffset',
  });
  const parts = formatter.formatToParts(date);
  const offsetPart = parts.find((part) => part.type === 'timeZoneName')?.value || 'GMT+0'; // e.g., "GMT-4", "GMT+5:30"

  const match = offsetPart.match(/GMT([+-])(\d{1,2}):?(\d{2})?/);
  if (!match) return 0;

  const sign = match[1] === '+' ? 1 : -1;
  const hours = parseInt(match[2], 10);
  const minutes = match[3] ? parseInt(match[3], 10) / 60 : 0;

  return sign * (hours + minutes);
};

// --- Main Exported Function ---

export const convertTimeSlots = (
  originalSlots: readonly string[],
  userTimeZone: string,
  appointmentDate: Date
) => {
  // Your Business Time Zone Offset
  const BUSINESS_TIME_ZONE_OFFSET_HOURS = 5; // GMT+05:00

  // Get the user's offset for the specific date they selected
  const userOffsetHours = getOffsetInHours(userTimeZone, appointmentDate);
  
  // Calculate the total difference in hours to adjust by
  const totalDifference = BUSINESS_TIME_ZONE_OFFSET_HOURS - userOffsetHours;

  return originalSlots.map((slot) => {
    const { hours: originalHours, minutes } = parse12HourTime(slot);

    // Apply the difference to find the user's local time
    // The modulo handles wrapping around midnight correctly
    const convertedHours = (originalHours - totalDifference + 24) % 24;
    
    const convertedTimeLabel = formatTo12HourTime(convertedHours, minutes);

    return {
      original: slot, // The value to be saved (e.g., "1:00pm")
      converted: convertedTimeLabel, // The label to show the user (e.g., "4:00am")
    };
  });
};