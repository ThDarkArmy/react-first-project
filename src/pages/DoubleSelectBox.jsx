import React, { useState } from 'react';
import './DoubleSelectBox.css'; // Import CSS for styling

const DoubleSelectBox = () => {
  const [mainSelectValue, setMainSelectValue] = useState('');
  const [replacementSelectValue, setReplacementSelectValue] = useState('');

  const handleMainSelectChange = (event) => {
    setMainSelectValue(event.target.value);
  };

  const handleReplacementSelectChange = (event) => {
    setReplacementSelectValue(event.target.value);
  };

  return (
    <div className="container1">
<div className="select-container">
      {/* Replacement Select Box */}
      
      <select
        value={replacementSelectValue}
        onChange={handleReplacementSelectChange}
        className="label-select"
      >
        <option value="option1">Claim Num</option>
        <option value="option2">Claim Key</option>
      </select>

      {/* Main Select Box */}
      <select
        value={mainSelectValue}
        onChange={handleMainSelectChange}
        className="main-select"
      >
        <option value="">Main Select</option>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
      </select>
    </div>
    </div>
    
  );
};

export default DoubleSelectBox;
