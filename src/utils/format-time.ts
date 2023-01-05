export function formatTime(date: Date, formatStr: string = 'YYYY/MM/DD HH:mm:ss') {
  return useDateFormat(date, formatStr).value
}
