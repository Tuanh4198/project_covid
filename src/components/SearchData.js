import React, { useState } from 'react';
import { useSelector } from "react-redux";

const SearchData = () => {
    // search
    const [country, setCountry] = useState(''),
          {data} = useSelector((state) => state.posts);

    // on submit
    let result = {}
    const getCountryInfor = (e) => {
        e.preventDefault();
        result = data.filter(val => val.country === country);
        if (Object.keys(result).length > 0) {
            let dataShow = `Quốc gia: ${result[0].country}
                <br>Số ca mắc: ${result[0].cases}
                <br>Số ca tử vong: ${result[0].deaths}
                <br>Số ca khỏi bệnh: ${result[0].recovered}
                <br/>Số ca mắc trong ngày: ${result[0].todayCases}
                <br/>Số tử vong trong ngày: ${result[0].todayDeaths}`
            return document.getElementById('showRéult').innerHTML = dataShow;
        }
        return document.getElementById('showRéult').innerHTML = `Không có kết quả cho ${country}`
    }

    return (
        <>
        <form onSubmit={getCountryInfor}>
          <div className="form-row">
            <input type="text" className="form-control col-8 bg-dark text-white" 
                  value={country} 
                  onChange={e => setCountry(e.target.value)} 
            />
            <button type="submit" className="btn-dark col-4 btn-md location-button" >SEARCH</button>
          </div>
        </form>
        <br/>
        <div id="showRéult"></div>
        </>
    );
};

export default React.memo(SearchData);