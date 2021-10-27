import React from 'react';

import { getCallType } from '../common/helper.js';

export const Feed = (props) => {

  const { direction, type } = getCallType(props);
  const dateStr = new Date(props.created_at).toLocaleString();

  return (
    <div className="feed">
      <div>{direction + ' ' + type} </div>
      <div>{props.to} <br /> {"Tried to call on " + props.via}</div>
      <div>{dateStr} </div>
    </div>
  )
}