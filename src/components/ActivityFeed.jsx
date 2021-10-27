import React from 'react';

import '../css/activity-feed.css';

import { Feed } from './Feed.jsx';
import activityService from '../services/activity.js';

export default class ActivityFeed extends React.Component {

  constructor() {
    super();

    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    activityService.getActivities()
      .then((activities) => {
        this.setState({ activities });
      });
  }

  onFeedClick(id) {
    this.props.onFeedClick(id);
  }

  render() {
    return (<div className="activity-feed-container">
      {
        this.state.activities
          .filter((activity) => !activity.is_archived)
          .map((activity, index) => <div key={index} onClick={() => this.onFeedClick(activity.id)}><Feed {...activity} /></div>)
      }
    </div>);
  }
}