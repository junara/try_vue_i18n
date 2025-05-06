// Import and merge the main locale and links files
import base from './base/ja.json'
import links from './links/ja.json'

// Export the merged locale
export default { ...base, ...links }
