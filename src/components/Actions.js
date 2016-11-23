import React from 'react';

const Actions = ({load}) =>
  <div className="actions">
    {[1, 2, 3, 4].map((num, i) => <a key={i} onClick={load(num)}>{num}</a>)}
  </div>;

export default Actions;
