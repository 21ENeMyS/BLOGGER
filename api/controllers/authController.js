const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
const shortId = require("shortid");

exports.signup = async (req, res) => {
  //input data user
  const { email, name, password } = req.body;
  // cek apakah sudah ada data ini dalam database
  const emailUser = await User.findOne({ email: email.toLowerCase() });
  if (emailUser) {
    return res.status(401).json({ error: `${email} is already exist` });
  }
  // generate username jika tidak ada data dalam database
  let username = shortId.generate();
  let profile = `${process.env.CLIENT_URL}/profile/${username}`;
  const newUser = new User({ email, name, username, password, profile });
  // buatkan data
  newUser
    .save()
    .then((result) => {
      return res
        .status(201)
        .json({ message: `Your account (${name}) has created ` });
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

// TODO validation  !

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // cek email dalam database
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: `Maaf data tidak ada silahkan, registrasi` });
    }

    // cek password yang di inputkan apakah sama dengan database
    if (!user.authenticate(password)) {
      return res
        .status(400)
        .json({ message: `email atau password tidak valid` });
    }

    // token di generate dan masukan ke halaman depan
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, role } = user;
    return res
      .status(200)
      .json({ token, user: _id, username, name, email, role });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "maaf email dan password yang anda masukan salah" });
  }
};
