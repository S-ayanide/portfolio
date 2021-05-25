const path = require('path')
module.exports = [
  {
    path: '/homepage',
    component: path.resolve(`src/pages/homepage.jsx`)
  },
  {
    path: '/resume',
    component: path.resolve(`src/pages/resume.jsx`)
  },
  {
    path: '/talks',
    component: path.resolve(`src/pages/talks.jsx`)
  },
  {
    path: '/talks/details',
    component: path.resolve(`src/pages/details.jsx`)
  },
  {
    path: '/blogs',
    component: path.resolve(`src/pages/blogs.jsx`)
  }
];