import React, { FunctionComponent } from 'react';

interface Props {}

const Expenses: FunctionComponent<Props> = (props) => {

  return (<div>
    <input data-testid="description" type="text"/>
  </div>);
};

export default Expenses;
