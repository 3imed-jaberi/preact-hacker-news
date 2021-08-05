import { format } from "./format-time.helper";

/**
 * parses the unix time into closest days/hours/minutes
 * @param {number} time
 */
 export function parseTime(time: number) {
  const diff = Date.now() / 1000 - Number(time);

  if (diff < 3600) {
    return format(Math.floor(diff / 60), ' minute');
  }
  if (diff < 86400) {
    return format(Math.floor(diff / 3600), ' hour');
  }
  return format(Math.floor(diff / 86400), ' day');
}
