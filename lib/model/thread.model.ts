import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({
    text: {type: String, required: true},

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },

    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
     parentId: {
        type: String
     },

     //One thread can have multiple children of type thread
    //the comments(children) to a thread(parent)
     children: [
        {
           type: mongoose.models.Thread || mongoose.model('Thread', threadSchema) 
        }
     ]
});

    const Thread = mongoose.models.Thread || mongoose.model('Thread',threadSchema);

    export default Thread;