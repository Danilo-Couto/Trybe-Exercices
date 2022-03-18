const users = [
  {
      username:'nosss',
      email: 'nos@gmail.com',
      password: 12345
      }
];

function validateRegister(users) {
  const { username , email, password  } = req.body;

  const isUsername = (username && username.length > 3);
  const isEmail = (email && email.includes('@') && email.includes('.com'));
  // const isPassword = (password.length > 3 && password.length < 8 && typeof password === 'number');

  if (!isUsername || !isEmail) return res.status(400).json({ message: 'invalid data' });

  next();
};

console.log(validateRegister(users[0]))