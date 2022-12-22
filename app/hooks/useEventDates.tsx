export default function useEventDates(events: any[]) {
  const now: Date = new Date();
  const today: Date = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );

  const eventsPast = events.filter(
    (event) => event.date && today > new Date(event.date)
  );

  const eventNext = events.find(
    (event) => event.date && today <= new Date(event.date)
  );

  return { eventNext, eventsPast };
}
