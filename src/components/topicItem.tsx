import React, { useState, useEffect } from 'react';
import { ITopic } from '../Resources/ITopic';
import '../Resources/design.css'

type ITopicProps = {
  infomation: ITopic;
};

const TopicItem:React.FC<ITopicProps> = ({infomation}) => {
  const [heartOn, setHeartOn] = useState<boolean | undefined | null>(infomation.like)
  useEffect ( () => {
  },[])

  const likeEvent = () => {
    const getData = async () => {
      try {
        let likeCheck:boolean
        if (infomation.like === undefined)
        {
          infomation.like = true
        }
        else
        {
          infomation.like = !infomation.like;
        }
        setHeartOn(infomation.like)

        const response = await fetch('https://api.example.com/data', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(infomation),
        });

        console.log(JSON.stringify(infomation))

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
      } catch (error) {
          console.log(error)
      }
    }
  getData()
}

  return (
    <div className='topicItemCSS'>
      <span style={{textWrap:'wrap', width:'100%'}}>{infomation.title}</span>
      <div style={{position:'relative', width: '150px', height: '150px',}} onDoubleClick={likeEvent}>
        <img src={infomation.imgPath} style={{ width: '150px', height: '150px', objectFit: 'scale-down', position:'absolute', top:'0px', left:'0px' }}/>
        { (heartOn === undefined || heartOn === false) ? <img src='img_heart_empty.png' className='heartCSS' /> : <img src={'img_heart_filled.png'} className='heartCSS'/> }
      </div>
    </div>
  );
}

export default TopicItem;