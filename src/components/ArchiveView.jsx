import React, { useEffect, useState } from 'react';

import '../css/activity-feed.css';

import { Feed } from './Feed.jsx';
import activityService from '../services/activity.js';

export const ArchiveView = ({ onBack }) => {

  const [activities, setActivities] = useState(null);

  useEffect(() => {
    activityService.getActivities()
      .then(resp => {
      console.log(resp)
      setActivities(resp);
    });
  }, []);

  return (<div>

    <button onClick={() => onBack()} >Back</button>
    {
      (activities || [])
        .filter((activity) => activity.is_archived)
        .map((activity, index) => <Feed key={index} {...activity} />)
    }
  </div>);
}