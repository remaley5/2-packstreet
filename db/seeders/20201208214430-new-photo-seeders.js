'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/beehive-pattern.jpeg',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/border-transparent-background.jpeg',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/Cute-Flowers-10-Floral-Abstract-Seamless-Patterns-2.jpeg',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/demo-logo-2+2.png',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/flowers-transparent-background+2.png',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/oranges.jpeg',
        userId: 1,
      }),
      r({
        url: 'https://packstreet-bucket.s3-us-west-2.amazonaws.com/patterns/packstreet-logo.png',
        userId: 1,
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos');
  }
};
