import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const PrimaryButton = (props) => (
  <div>
    <RaisedButton onClick={props.submitTask} label="ADD" primary={true} style={style} />
  </div>
);

export default PrimaryButton;