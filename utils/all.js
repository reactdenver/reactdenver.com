import { parseISO, format, isValid } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};

export function formatWithOffset(datetime) {
  const parsed = parseISO(datetime);
  const newParsed = utcToZonedTime(parsed, "America/Denver");

  if (!isValid(newParsed)) {
    // return empty & log error for invalid dates
    console.error("invalid date:", datetime);
    return "";
  }

  return `${format(newParsed, "MMMM dd, yyyy hh:mm")}`;
}
