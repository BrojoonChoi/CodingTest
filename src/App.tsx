import './App.css';
import React, { useState, useEffect } from 'react'
import { ITopic } from './Resources/ITopic';
import test from './etc/topic.json'
import TopicItem from './components/topicItem.tsx'

function App() {
  const [data, setData] = useState<Array<ITopic[]> | null>(null)
  
  useEffect(() => {
    if (test) {
      const reducedData = test.reduce((acc: Array<ITopic[]>, curVal: ITopic, index: number) => {
        if (index % 3 === 0)
        {
          acc.push(test.slice(index, index + 3))
        }
        return acc;
      }, []);
      setData(reducedData);
    }
  }, [])

  return (
    <body style={{display:'flex', alignItems:'center', backgroundColor:'lightgray', alignContent:'center', justifyContent:'center'}}>
      <div>
        {
          data?.map((innerArray:ITopic[], index) => {
            return (
              <div key={"MINE"+index.toString()} style={{display:'flex', flexDirection:'row', marginTop:'1rem', marginBottom:'1rem'}}>
                {
                  innerArray.map((item:ITopic, indexEx) => { 
                    return (
                      <TopicItem infomation={item} key={index.toString() + "AND" + indexEx.toString()}/>
                    )
                  })
                }
              </div>
          )
          })
        }
      </div>
    </body>
  );
}

export default App;
