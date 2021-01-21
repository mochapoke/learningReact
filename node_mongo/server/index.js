const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { auth } = require('./middlewrae/auth');
const { User } = require('./models/User.js');

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('🌼hello world🌼');
});

app.get('/api/hello', (req, res) => res.send('Proof: Server 💘 Client'));

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ registerSuccess: false, err });
    return res.status(200).json({
      registerSuccess: true,
    });
  });
});

app.post('/api/users/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: 'Wrong password' });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie('cd', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  // 여기까지 미들웨어를 통과해 왔다는 얘기는,
  // Authentication이 True라는 소리.
  // false라면 미들웨어에서 걸려져서 error 처리됨
  res.status(200).json({
    // 정보 제공:
    // auth.js에서 req에 id를 넣었기때문에 넣을 수 있음\
    // 어떤페이지에서든지 정보에 접근가능하기때문에
    // 한번에 다 설정하면 편해짐!
    _id: req.user._id,
    isAudmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', tokenExp: '' },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

app.listen(5000, () => {
  console.log('server started on port 5000');
});
