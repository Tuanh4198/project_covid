import React from 'react';
import ShowData from './components/ShowData';
import SearchData from './components/SearchData';

function App() {
  return (
    <div className="row">
      <div className="col-7">
        <ShowData/>
      </div>
      <div className="col-4">
        <SearchData/>
      </div>
    </div>
  )
}

export default App;
