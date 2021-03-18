import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from '../redux/actions/fetchData';

const ShowData = () => {
    // get data
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getData());
    }, [dispatch]);

    // update data everytime
    useEffect(() => {
        setInterval(function(){
          dispatch(getData());
        }, 180000);
    }, []);

    // get data
    const {data} = useSelector((state) => state.posts);
    let totalCases = 0,
        totalDeaths = 0,
        totalRecovered = 0;

    // get data
    let dataSort = {};
    if (data != null) {
        // sort data
        dataSort = data.sort((val1, val2) => val2.cases-val1.cases);
        // get index of VN
        let indexVN = dataSort.findIndex(data => data.country === 'Vietnam');
        // get element VN
        let reindexVN = dataSort.splice(indexVN, 1);
        // reindex of VN
        dataSort.unshift(reindexVN[0]);
        // arr has 10 element
        dataSort.length = 10;
        // total
        data.map(val => {
            totalCases+=val.cases;
            totalDeaths+=val.deaths;
            totalRecovered+=val.recovered;
        })
    } else {
        console.log('Loading');
    }

    return (
        <>
        <table className="table table-dark">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Tổng số ca nhiễm</th>
                    <th scope="col">Tổng số tử vong</th>
                    <th scope="col">Tổng số ca khỏi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{totalCases}</td>
                    <td>{totalDeaths}</td>
                    <td>{totalRecovered}</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <table className="table table-dark">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Quốc Gia</th>
                    <th scope="col">Số ca măc</th>
                    <th scope="col">Tử vong</th>
                    <th scope="col">Bình phục</th>
                </tr>
            </thead>
            <tbody>
            {
                Object.keys(dataSort).length === 0 ? <tr><td>"Loandingg"</td></tr> : dataSort.map((val, index) => ( 
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>
                            <img src={val.countryInfo.flag} width="30"/>  
                            <span>{val.country}</span>
                        </td>
                        <td>{val.cases}</td>
                        <td>{val.deaths}</td>
                        <td>{val.recovered}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    );
};

export default React.memo(ShowData);