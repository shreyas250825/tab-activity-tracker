import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  duration: { type: Number, required: true },
  trustScore: { type: Number, required: true }
});

export default mongoose.model('Log', logSchema);
