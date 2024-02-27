import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ITopic } from '../Resources/ITopic';
import '../Resources/design.css'
import axios from 'axios';

type ITopicProps = {
  information: ITopic;
};

const TopicItem:React.FC<ITopicProps> = ({information}) => {
  const [heartOn, setHeartOn] = useState<boolean | undefined | null>(information.like)
  useEffect ( () => {
  },[])

  const likeEvent = () => {
    const getData = async () => {
      //검색결과 없음 화면은 그냥 리턴
      if (information.seq === -1)
        return
      try {
        let likeCheck:boolean
        if (information.like === undefined)
        {
          information.like = true
        }
        else
        {
          information.like = !information.like;
        }
        setHeartOn(information.like)
        await axios.put(`http://localhost:3001/${information.seq}`, {
          title:information.title,
          idx:information.idx,
          imgPath:information.imgPath,
          grade:information.grade,
          like:information.like
        }).then
        (
          (response) => {
            if (response.status !== 200)
              throw new Error('Failed to fetch data');
            console.log(response.data)
          }
        )
      } catch (error) {
          console.log(error)
      }
    }
  getData()
}

  return (
    <div className='topicItemCSS'>
      <Link to={`/${information.idx}`} style={{textWrap:'wrap', width:'100%'}}>{information.title}</Link>
      <div style={{position:'relative', width: '150px', height: '150px',}} onDoubleClick={likeEvent}>
        <img src={information.imgPath} style={{ width: '150px', height: '150px', objectFit: 'scale-down', position:'absolute', top:'0px', left:'0px' }} alt="image"/>
        { (heartOn === undefined || heartOn === false) ? <img src='img_heart_empty.png' className='heartCSS' alt="image"/> : <img src={'img_heart_filled.png'} className='heartCSS' alt="image"/> }
      </div>
    </div>
  );
}

export default TopicItem;