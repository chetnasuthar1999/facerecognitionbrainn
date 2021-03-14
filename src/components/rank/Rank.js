import React from 'react';

const Rank = ({name, entries}) => {    // in this () brackets we add props by destructring  
  return (
    <div>
      <div className='white f3'>
      {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}


export default Rank;
