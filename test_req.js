const axios = require('axios');
axios.post('http://localhost:3000/auth/signup', {
  username: 'demo user',
  email: 'demo@user.com',
  password: 'Demo123'
}).then(res => console.log("Success", res.data)).catch(err => {
  console.log("Error:", err.response?.data);
});
