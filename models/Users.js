import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this user.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    status: {
        type: String,
        required: [true, "Please provide status"],
        maxlength: [60, "The status cannot be more than 60 characters"],
    },
})

export default mongoose.models.Users || mongoose.model('Users', UserSchema)
