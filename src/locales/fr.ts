// Import and merge the main locale and links files
import base from './base/fr.json'
import links from './links/fr.json'

// Export the merged locale
export default { ...base, ...links }
