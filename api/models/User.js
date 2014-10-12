module.exports = {
  attributes: {

    id: { type: 'integer', primaryKey: true, autoIncrement: true },

//    first_name: { type: 'string', required: true },

//    last_name: { type: 'string', required: true },

    username: { type: 'string', unique: true },

    email: { type: 'email',  unique: true, required: true },

    passports: { collection: 'Passport', via: 'user' },

    likes: { collection: 'like', via: 'user' },

    posts: { collection: 'post', via: 'user' },

    company: { model: 'company' }
  }
};