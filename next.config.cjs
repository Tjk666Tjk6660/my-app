const { default: path } = require('path');



/** @type {import('next').NextConfig} */
module.exports={
  reactStrictMode: false,
  sassOptions:{
    includePaths:[path.join(__dirname,'styles')]
  }
};

