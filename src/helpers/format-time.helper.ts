/**
 * formats the time in more readable statement
 * @param {number} time
 * @param {string} unit
 */
export function format (time: number, unit: string) {
  return (time > 1 ? `${time} ${unit}s ago` : `${time} ${unit} ago`);
} 
