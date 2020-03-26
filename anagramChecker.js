// Return true if anagram and false if not
// e.g. 'elbow' === 'below'
// e.g 'Dormitory' === 'dirty room##'
// Both of them are ok
const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2)
}

// helper function
const formatStr = str => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = isAnagram