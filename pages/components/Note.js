import React from 'react';

const Note = ({ deleteMethod, title }) => (
  <div className="note" onClick={deleteMethod}>
    {title}
  </div>
);

export default Note;
