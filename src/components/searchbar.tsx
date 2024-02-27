import React from 'react';

const SearchBar = ({onChange}) => {
  return (
     <input 
     type="text" 
     onChange={onChange}
     style={{display:'flex', flexDirection:'column', width:'100%', borderRadius:'16px', borderColor:'gray', borderWidth:'6px', alignItems:'center', borderStyle:'solid'}}
     />
  );
}

export default SearchBar;