import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import './App.css';
import { ITopic } from './Resources/ITopic'
import React, { useState, useEffect }  from 'react'
import MainView from './View/mainview.tsx';
import DetailView from './View/detailview.tsx';
import jsonFile from './etc/topic.json'

function App() {
  const [filter, setFilter] = useState<string> ('')
  const [selectedOption, setSelectedOption] = useState<string>('전체');
  const [parsedFile, setParseFile] = useState<ITopic[]>();

  useEffect(() => {
    const func = async() => {
      if (jsonFile) {
        const readFile:ITopic[] = await jsonFile.map((item, index) => ({
          title:item.title ?? "",
          idx:item.idx ?? "",
          imgPath:item.imgPath ?? "",
          grade:item.grade ?? "",
          like:item.like ?? false,
          seq:index
        }))

        setParseFile(readFile)
      }
    }

    func()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView parsedFile={parsedFile} filter={filter} setFilter={setFilter} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
          <Route path="/detail/:idx" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
