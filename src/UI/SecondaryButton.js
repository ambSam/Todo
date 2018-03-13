import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const SecondaryButton = (props) => (
  <div>
    <RaisedButton onClick={props.deleteTask} label="DELETE" secondary={true} style={style} />
  </div>
);

export default SecondaryButton;