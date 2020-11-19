module.exports = {
  "globDirectory": "distro/",
  "globPatterns": [
    "**/*.{png,html,js,css}"
  ],
  "swDest": "public/sw.js",
  runtimeCaching: [{
    urlPattern: /https:\/\/hw18-budget-tracker\.herokuapp\.com/,
    handler: 'NetworkFirst'
  }]
};