import { format } from "date-fns";

export default function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, "MMM dd, hh:mm a");
}
