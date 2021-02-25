'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Country, {foreignKey: 'CountryId'});
      Song.belongsToMany(models.Playlist, {through: models.PlaylistSong});
    }

    getDuration() {
      let minutes = Math.floor(this.duration / 60);
      let seconds = this.duration % 60;
      if (seconds < 10) {
        seconds = `0${minutes}`;
      }
      return `${minutes}:${seconds}`
    }
  };
  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null || value.length === 0) {
            throw new Error ('Title is required')
          }
        }
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null || value.length === 0) {
            throw new Error ('Artist is required')
          }
        }
      }
    },
    embeddedCodeURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null || value.length === 0) {
            throw new Error ('URL is required')
          }
        },
        isUrl : {
          msg : 'Not a URL'
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null) {
            throw new Error ('Duration is required')
          }
        }
      }
    },
    released_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null) {
            throw new Error ('Released Year is required')
          }
        }
      }
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        noFalsy(value) {
          if (value === null || value === '--SELECT--') {
            throw new Error ('Country is required')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};