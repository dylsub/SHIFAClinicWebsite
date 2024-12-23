import React from 'react'
import TextColumn from './TextColumn'
import DropdownColumn from './DropdownColumn'

const GetInvolvedFAQ = () => {
    // Devin + Faris
    // Final boss lets get it
    // This component represents the full General FAQ section on the Get Involved page
    // It should have a text section -> TextColumn.jsx and DropdownColumn.jsx side by side -> closing text section
    // Create TextColumn.jsx in its reprective file
    // Style accordingly

  return (
    <div className = "getInvolvedFAQ" style = {{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'flex-start', margin: '60px'}}>
      <div className = "textColumn" style = {{ flex: '1', boxSizing: 'border-box', padding: '1rem', marginRight: '30px'}}>
        <TextColumn />
      </div>
      <div className = "dropdownColumn" style = {{ flex: '1', boxSizing: 'border-box', padding: '1rem'}}>
        <DropdownColumn columnSize={"600px"} />
      </div>
    </div>
  );
};

export default GetInvolvedFAQ
