'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fs = require('fs');
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = JSON.parse(fs.readFileSync('./data/playlist.json'));
   for (let i = 0; i < data.length; i++) {
     data[i].createdAt = new Date();
     data[i].updatedAt = new Date();
   }
   return queryInterface.bulkInsert('Playlists', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
