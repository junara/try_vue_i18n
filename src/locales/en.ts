// Import and merge the main locale and links files
import base from './base/en.json'
import links from './links/en.json'

// Export the merged locale
export default { ...base, ...links }
