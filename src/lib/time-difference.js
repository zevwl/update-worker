
const pluralize = n => n !== 1 ? 's' : ''

const timeDifference = date => {
  const elapsed = Date.now() - new Date(date).getTime()

  const msMinute = 60 * 1000
  const msHour = msMinute * 60
  const msDay = msHour * 24
  const msMonth = msDay * 30
  const msYear = msDay  * 365

  if (elapsed < msMinute) {
    const seconds = Math.round(elapsed / 1000)
    return `${seconds} second${pluralize(seconds)}`
  }

  if (elapsed < msHour) {
    const minutes = Math.round(elapsed / msMinute)
    return `${minutes} minute${pluralize(minutes)}`
  }

  if (elapsed < msDay) {
    const hours = Math.round(elapsed / msHour)
    return `${hours} hour${pluralize(hours)}`
  }

  if (elapsed < msMonth) {
    const days = Math.round(elapsed / msDay)
    return `${days} day${pluralize(days)}`
  }

  if (elapsed < msYear) {
    const months = Math.round(elapsed / msMonth)
    return `${months} month${pluralize(months)}`
  }

  const years = Math.round(elapsed / msYear)
  return `${years} year${pluralize(years)}`
}

export default timeDifference
