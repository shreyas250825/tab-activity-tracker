// src/components/Tracker.tsx
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ActivityLog } from '../types';

const Tracker = () => {
  const [trustScore, setTrustScore] = useState(100);
  const awayStart = useRef<number | null>(null);

  useEffect(() => {
    const handleBlur = () => {
      awayStart.current = Date.now();
    };

    const handleFocus = async () => {
      if (awayStart.current) {
        const duration = Math.floor((Date.now() - awayStart.current) / 1000);
        const newScore = Math.max(0, trustScore - duration * 0.5);
        setTrustScore(newScore);

        const log: ActivityLog = {
          timestamp: new Date().toISOString(),
          duration,
          trustScore: newScore
        };

        await axios.post('https://tab-activity-tracker.onrender.com/api/activity', log);


      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [trustScore]);

  return (
    <div className="tracker-card">
      <h2>Trust Score: {trustScore.toFixed(2)}</h2>
      <p>Switch tabs or minimize this window to test activity tracking.</p>
    </div>
  );
};

export default Tracker;
