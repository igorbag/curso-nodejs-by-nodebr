const Mongoose=  require('mongoose')
const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//mocha workaround
module.exports = Mongoose.models.users || Mongoose.model('users', userSchema)