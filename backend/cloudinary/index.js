const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: 'dzy0s2r5y',
    api_key: '788325867543532',
    api_secret: 'SjPM3LLvyYUfQAH7R-jDVfJw6UY',
    secure: true,
});

module.exports = cloudinary;