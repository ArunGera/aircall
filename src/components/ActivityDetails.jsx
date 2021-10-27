import React from 'react';



export const ActivityDetails = (props) => {
  return (
    <React.Fragment>
      <button onClick={() => props.onBack()} > Back</button>
      <div>Details view of {JSON.stringify(props.details)}</div>
      <button onClick={() => props.archiveActivity(props.details.id)}> Archive </button>
    </React.Fragment>
  )
}