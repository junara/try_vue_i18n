// Import and merge the main locale and links files
import base from './base/zh.json'
import links from './links/zh.json'

// Export the merged locale
export default { ...base, ...links }
