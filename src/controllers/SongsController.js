const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    let songs = null
    const search = req.query.search
    try {
      if (search) {
        // filtering
        songs = await Song.findAll({
          where: {
            $or: [
              'album', 'genre', 'artist', 'title'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
        // or else show a limit of 10 songs
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: `There are no songs`
      })
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `Song doesn't exist`
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `An error occured trying to add song`
      })
    }
  },

  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: `An error occured trying to update song`
      })
    }
  }
}
