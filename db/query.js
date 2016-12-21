const knex = require('./knex');
const bcrypt = require('bcryptjs');

module.exports = {
  postUser: function(body){
    return bcrypt.genSalt(10)
    .then((salt)=>{
      return bcrypt.hash(body.password, salt);
    })
    .then((hash)=>{
      return knex('player')
      .insert({
        player_fname:body.first_name,
        player_lname:body.last_name,
        player_email:body.email,
        admin:false,
        password:hash
      });
    });
  },
  loginUser: function(body){
    return knex('player')
    .where('player_email',body.email)
    .first()
    .then((data)=>{
      return bcrypt.compare(body.password, data.password);
    });
  }
};
