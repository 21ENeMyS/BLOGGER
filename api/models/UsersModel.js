const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    profile: {
      type: String,
      required: true,
    },

    hashed_password: {
      type: String,
      required: true,
    },

    salt: String,
    about: String,

    role: {
      type: Number,
      default: 0,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    resetPasswordLink: {
      data: String,
      // default: "",
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    // membuat variabel password
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    // password di enkripsi
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    // mengkomper atau bandingkan password yang di masukan user sama dengan didatabase ?
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainText, this.hashed_password, (err, isMatch) => {
        if (err) reject(err);
        resolve(isMatch);
      });
    });
  },

  // enkripsi password

  encryptPassword: function (password) {
    if (!password) return " ";
    try {
      // password akan dienkripsi di dalam database
      const salt = bcrypt.genSaltSync(10);
      // terjadi hash dalam password
      return bcrypt.hashSync(password, salt);
    } catch (error) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random() + " ");
  },
};

module.exports = mongoose.model("Users", userSchema);
