import express from 'express';
import Log from '../models/Log';
import { ActivityLog } from '../types/ActivityLog';

const router = express.Router();

// POST /api/activity
router.post('/', async (req, res) => {
  try {
    const { timestamp, duration, trustScore }: ActivityLog = req.body;

    const newLog = new Log({ timestamp, duration, trustScore });
    await newLog.save();

    res.status(201).json({ message: 'Activity logged successfully', data: newLog });
  } catch (error) {
    console.error('Log save error:', error);
    res.status(500).json({ error: 'Failed to save log' });
  }
});

export default router;
