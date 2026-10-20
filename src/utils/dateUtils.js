/**
 * Time and Date Calculation Utilities
 */

export function calculateTimeDifference(targetDateString) {
  try {
    const targetTime = new Date(targetDateString).getTime();
    const now = Date.now();

    if (isNaN(targetTime)) {
      return {
        isFuture: false,
        isInvalid: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0
      };
    }

    const diffMs = now - targetTime;
    const isFuture = diffMs < 0;
    const absDiff = Math.abs(diffMs);

    const totalSeconds = Math.floor(absDiff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      isFuture,
      isInvalid: false,
      days,
      hours,
      minutes,
      seconds,
      totalSeconds
    };
  } catch (err) {
    return {
      isFuture: false,
      isInvalid: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0
    };
  }
}

export function padZero(num, length = 2) {
  if (isNaN(num)) return '00';
  return String(num).padStart(length, '0');
}
