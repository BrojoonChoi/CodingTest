import '../Resources/design.css'
import React, { useState, useEffect } from 'react'
import { ITopic } from '../Resources/ITopic'
import TopicItem from '../Components/topicItem.tsx'
import SearchBar from '../Components/searchbar.tsx'
import RadioButtons from '../Components/radiobuttons.tsx'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';

const DetailView = () => {
  const { idx } = useParams();
  const [data, setData] = useState<ITopic | undefined>(undefined);
  
  useEffect(() => {
    const getData = async() => {
      const localData = await axios.get(`http://localhost:3001/${idx}`).then(
        (res) => {
          if (res.status === 200) {
            return res.data
          }
          else {
            throw new Error('404 Not found')
          }
        }).catch ((error) => {
          console.log(error)
        })

        setData(localData)
    }
    getData()
  }, [idx])

  return (
    <div style={{display:'flex', flexDirection:'column' ,alignItems:'center', backgroundColor:'lightgray', alignContent:'center', justifyContent:'center', paddingLeft:'10rem', paddingRight:'10rem'}}>
      <Link to={`/`} style={{textWrap:'wrap', width:'100%'}}>메인 화면으로</Link>
      <div>
        {
          data === undefined ? <span>Loading...</span>
          :
          <div>
            <img src={data.imgPath} alt='bigimg' style={{width:'400px'}} />
            <span>상세페이지입니다.</span>
            {
              data.like === false || data.like === undefined? 
                <div style={{display:'flex', flexDirection:'column'}}>
                  <span>이 토픽이 마음에 드시나요?</span>
                  <img src={'/img_heart_empty.png'} alt="image" className='heartBigCSS'/> 
                </div>
              : 
                <div style={{display:'flex', flexDirection:'column'}}>
                  <span>이 토픽이 마음에 드시는군요.</span>
                  <img src={'/img_heart_filled.png'} alt="image" className='heartBigCSS'/> 
                </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default DetailView;
