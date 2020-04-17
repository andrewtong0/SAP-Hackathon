import React, { useState } from 'react';
import AwaitingTask from './AwaitingTask';


function AwaitingTasks(props) {
  
  return (
    <div>
      {props.data.map(task => (
        <AwaitingTask
          key={task.id}
          title={task.title}
          date={task.date}
          lat={task.lat}
          lon={task.lon}
          name={task.name}
          onUpdate={props.updateTask}
          id={task.id}
          complete={task.complete}
        />
      ))}
    </div>
  );
}

export default AwaitingTasks;
