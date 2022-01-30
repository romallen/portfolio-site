import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import Select from 'react-select';
import indicators from 'highcharts/indicators/indicators-all'



export default function HighSt() {
  const chartComponentRef = useRef(null);
  const [compOptions, setCompOptions] = useState([])
  const [selCompany, setSelCompany] = useState({value:"WISYNCO", name: "Wisynco Group Limited"});
  const [data, setData] = useState([]);
  const [companiesInfo, setCompaniesInfo] = useState()
  const [ohlc, setOHLC] = useState([])
  const [closePrices, setClosePrices] = useState([])
  const [volume, setVolume] = useState([])
  const [options, setOptions] = useState()
 // const [loading, setLoading] = useState(true)
//  indicators(Highcharts)
let ticker;
// let now;

useEffect(() => {
    indicators(Highcharts)
  
    let fetchComp = async () => {
        let companyList = await axios.get("https://s3.ap-northeast-1.amazonaws.com/romallen.com/json/companies.json").then((res) => res.data)
        let compArr =  Object.values(companyList.companies)
        let opt = []
        compArr.forEach(element => {
         
          opt.push({value: element["ticker"], label: element["name"]})
        });
        setCompOptions(opt)
     }
     fetchComp()
    setSelCompany({value:"WISYNCO", name: "Wisynco Group Limited"})
    
  }, []);

  useEffect(() => {
    fetchData();
  }, [selCompany]);
  
  useEffect(()=> {
    let dataLen = data.length
    let ohlcc = [];
    let volumec = [];
    let closePricesc = []

    for (let i = 0; i < dataLen; i += 1) {
      ohlcc.push([
          data[i][0], // the date
          data[i][1], // open
          data[i][2], // high
          data[i][3], // low
          data[i][4] // close
      ]);
  
      volumec.push([
          data[i][0], // the date
          data[i][5] // the volume
      ]);

      closePricesc.push([ 
        data[i][0], // the date
          data[i][4] // close
      ])
    }
    ticker = selCompany["ticker"]
    setOHLC(ohlcc)
    setVolume(volumec)
    setClosePrices(closePricesc)
    //setLoading(false)
//    now = volumec[volumec.length-1][0]
  }, [data])


  useEffect(()=>{
  
    setOptions({
        chart: {
            height: 600,
        },
        title: {
            text: selCompany["name"]
        },
        legend: {
            enabled: true
        },
        rangeSelector: {
            selected: 1,
        },
        xAxis: {
            min: 1635566648,
            max: 1643547848
        },
        yAxis: [{
            height: '70%',
        }, {
            top: '60%',
            height: '15%',
     
        }, {
            top: '80%',
            height: '15%',
        }],
        plotOptions: {
            series: {
                showInLegend: true,
        }},
        series: [{
            type: 'candlestick',
            id: ticker,
            name: "OHLC Prices",
            data: ohlc
        }, {
            type: 'column',
            id: 'volume',
            name: 'Volume',
            data: volume,
            yAxis: 1
        },
        //  {
        //     type: "sma",
        //     id: 'overlay',
        //     linkedTo: ticker,
        //     yAxis: 0,
        // }, {
        //     type: "macd",
        //     id: 'oscillator',
        //     linkedTo: ticker,
        //     yAxis: 2
        // }
            ],
        caption: {
            text: companiesInfo
             }
    })
  },[volume, companiesInfo, ohlc, selCompany])




  let fetchData = async () => {
    let d = await axios
      .get(
        `https://s3.ap-northeast-1.amazonaws.com/romallen.com/json/${selCompany["value"]}-data.json`
      )
      .then((res) => {
        return res.data;
      });
    setCompaniesInfo(d.splice(0,1))
    setData(d);
  };
//   if (loading) { 
//     return (<div>Loading...</div>)
//   }

  return (
    <div>
  <Select
    //  defaultValue={selCompany}
    //  defaultInputValue={selCompany}
     onChange={setSelCompany}
     options={compOptions}
     placeholder={"Wisynco Group Limited"}
   />
    <HighchartsReact
      highcharts={Highcharts}
       options={options}
       constructorType = { 'stockChart' }
      ref={chartComponentRef}
 
      
    />
    </div>
  
  );
};