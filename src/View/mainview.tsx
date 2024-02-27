import '../App.css';
import React, { useState, useEffect } from 'react'
import { ITopic } from '../Resources/ITopic'
import TopicItem from '../Components/topicItem.tsx'
import SearchBar from '../Components/searchbar.tsx'
import RadioButtons from '../Components/radiobuttons.tsx'
import axios from 'axios';

const MainView = ({parsedFile, filter, setFilter, selectedOption, setSelectedOption}) => {
  const defaultMessage:Array<ITopic[]> = [[{title:'검색 결과가 없시유',idx:'',imgPath:'notFound.png',grade:'전체', like:false, seq:-1}]]
  const [data, setData] = useState<Array<ITopic[]> | null>(null)

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option.target.value);
  };
  
  useEffect(() => {
    if (parsedFile) {
      const filteredData = parsedFile.filter((item) => 
        item.title.toUpperCase().includes(filter.toUpperCase()) && (item.grade.toUpperCase().includes(selectedOption) || selectedOption === null || selectedOption.includes('전체')))

      const reducedData = filteredData.reduce((acc: Array<ITopic[]>, curVal: ITopic, index: number) => {
        if (index % 3 === 0)
        {
          acc.push(filteredData.slice(index, index + 3))
        }
        return acc;
      }, []);

      reducedData.length === 0 ? setData(defaultMessage) : setData(reducedData)
    }
  }, [filter, selectedOption])

  return (
    <div style={{display:'flex', flexDirection:'column' ,alignItems:'center', backgroundColor:'lightgray', alignContent:'center', justifyContent:'center', paddingLeft:'10rem', paddingRight:'10rem'}}>
      <SearchBar onChange={handleInputChange}/>
      <RadioButtons onChange={handleOptionChange} selectedOption={selectedOption}/>
        <div>
          {
            data?.map((innerArray:ITopic[], index) => {
              return (
                <div key={"MINE"+index.toString()} style={{display:'flex', flexDirection:'row', marginTop:'1rem', marginBottom:'1rem'}}>
                  {
                    innerArray.map((item:ITopic, indexEx) => { 
                      return (
                        <TopicItem information={item} key={index.toString() + "AND" + indexEx.toString()}/>
                      )
                    })
                  }
                </div>
            )
            })
          }
        </div>
    </div>
  );
}

export default MainView;
