export default function useEventDates(events: any[]) {
  const now: Date = new Date();
  const today: Date = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );
  console.log(today == new Date(events[5].date));
  let eventsPast = events.filter(
    (event) => event.date && today > new Date(event.date)
  );

  // && !isSameDay(today, new Date(event.date))

  let eventNext = events.find(
    (event) => event.date && today <= new Date(event.date)
  );

  //  || isSameDay(today, new Date(event.date)))

  // function isSameDay(d1: Date, d2: Date): boolean {
  //   return (
  //     d1.getUTCFullYear() === d2.getUTCFullYear() &&
  //     d1.getUTCMonth() === d2.getUTCMonth() &&
  //     d1.getUTCDate() === d2.getUTCDate()
  //   );
  // }

  return { eventNext, eventsPast };
}