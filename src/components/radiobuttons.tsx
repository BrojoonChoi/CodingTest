import React from 'react';

const RadioButtons = ({onChange, selectedOption}) => {
  const buttonList = ['입문', '초급', '중급', '중고급', '고급', '전체']

  return (
    <div>
    {
      buttonList.map((item, index) => {
        return <label key={index}>
          <input type='radio' name={item} value={item} onChange={onChange} checked={selectedOption === item}  />
          {item}
          </label>
      })
    }
    </div>
  );
}

export default RadioButtons;