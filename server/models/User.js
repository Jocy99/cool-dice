// imports the schema and model from mongoose
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// adds a new schema called userSchema
const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
   },
   password: {
      type: String,
      required: true,
      minlength: 5,
   },
   scores: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Score',
      },
   ],
});
// adds a function that hashes the password before saving a user
userSchema.pre('save', async function (next) {
   if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
   }

   next();
});
// adds a function that compares the password to the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
   return bcrypt.compare(password, this.password);
};
// adds a new model called User using the userSchema
const User = model('User', userSchema);
// exports the model
module.exports = User;
