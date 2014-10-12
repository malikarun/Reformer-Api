module.exports = {
  attributes: {

    id: { type: 'integer', primaryKey: true, autoIncrement: true },

    first_name: { type: 'string'},

    last_name: { type: 'string'},

    username: { type: 'string', unique: true },

    email: { type: 'email',  unique: true, required: true },

    passports: { collection: 'Passport', via: 'user' },

  }
};