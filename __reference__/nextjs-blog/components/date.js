// See https://date-fns.org/v2.16.1/docs/format for the many format() string options that are available
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  // Returns a time element containing a string like November 9th, 2022
  return <time dateTime={dateString}>{format(date, "LLLL do, yyyy")}</time>;
}
