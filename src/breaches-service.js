export default {
  breaches: [],
  filter: '',
  account: '',
  baseImageURL: 'https://haveibeenpwned.com/Content/Images/PwnedLogos/',
  baseApiURL: 'https://haveibeenpwned.com/api/v2/breachedaccount/',
  clear() {
    this.breaches = []
    this.filter = ''
    this.account = ''
  },
  getImageURL(breach) {
    return this.baseImageURL + breach.Name + '.' + breach.LogoType
  },
  formatDomain(domain) {
    return domain.startsWith('www') ? domain : `www.${domain}`
  },
  formatDate(d) {
    const date = new Date(d)
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
  },
}
