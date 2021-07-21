const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserScema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    roles: {
      type: [
        {
          type: String,
          enum: ['user', 'admin'],
          default: 'user',
        },
      ],
    },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.models.Users || mongoose.model('User', UserScema)
