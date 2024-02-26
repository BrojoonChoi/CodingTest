import React, { useState, useEffect, useContext } from 'react';
import { ITopic } from '../Resources/ITopic';

type ITopicProps = {
  infomation: ITopic;
};

const TopicItem:React.FC<ITopicProps> = ({infomation}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'200px', borderRadius:'2px', borderColor:'gray', borderWidth:'6px', alignItems:'center', borderStyle:'solid', marginLeft:'1rem', marginRight:'1rem'}}>
      <span style={{textWrap:'wrap'}}>{infomation.title}</span>
      <img src={infomation.imgPath} style={{ width: '150px', height: '150px', objectFit: 'scale-down' }}/>
    </div>
  );
}

export default TopicItem;