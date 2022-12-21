export default function useEventDates(events: any[]) {
  const now: Date = new Date(new Date().setUTCHours(0, 0, 0, 0));

  let eventsPast = events.filter(
    (event) =>
      event.date &&
      now > new Date(event.date) &&
      !isSameDay(now, new Date(event.date))
  );

  let eventNext = events.find(
    (event) =>
      event.date &&
      (now <= new Date(event.date) || isSameDay(now, new Date(event.date)))
  );

  function isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  return { eventNext, eventsPast };
}
