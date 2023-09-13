import { parseISO, format, isValid, addMinutes } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};

export function formatWithOffset(datetime) {
  const parsed = parseISO(datetime);

  if (!isValid(parsed)) {
    // return empty & log error for invalid dates
    console.error("invalid date:", datetime);
    return "";
  }

  const utcOffset = parsed.getTimezoneOffset();
  const isDST = utcOffset < new Date(2016, 1, 1).getTimezoneOffset();
  const edtOffset = isDST ? 240 : 300; // 300mins or 240mins during Daylight savings
  const offsetDiff = utcOffset - edtOffset;
  let adjustedTime = parsed;
  if (offsetDiff) {
    adjustedTime = addMinutes(parsed, offsetDiff);
  }

  return `${format(adjustedTime, "MMMM dd, yyyy")}`;
}
