import React from 'react';
import './App.css';
import {makeTableData} from "../common/makeTableData";
import {Table} from "../components/table";

function App() {

  console.log(makeTableData(10, 10000))
  return (
    <div className="App">
      <Table data={makeTableData(10, 10000)} rowHeight={35} visibleRows={10}/>
    </div>
  );
}

export default App;
