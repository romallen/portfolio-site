import React, { useEffect, useState, useRef } from 'react';
import Highcharts from "highcharts/highstock";
import {indicators} from "highcharts/indicators/indicators-all";
import {
  HighchartsStockChart,
  AreaSplineSeries,
  SplineSeries,
  CandlestickSeries,
  OHLCSeries,
  ColumnSeries,
  Chart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Legend,
  Navigator,
  RangeSelector,
  Tooltip,
  Caption,
  Series
  
} from 'react-jsx-highstock';
import axios from 'axios';
import Select from 'react-select';


export default function HChart() {
  const [compOptions, setCompOptions] = useState([])
  const [selCompany, setSelCompany] = useState("");
  const [data, setData] = useState([]);
  const [companiesInfo, setCompaniesInfo] = useState()
  const [ohlc, setOHLC] = useState([])
  const [closePrices, setClosePrices] = useState([])
  const [volume, setVolume] = useState([])
  //let companyList; 
  useEffect(() => {
    fetchComp();
    setSelCompany({value:"138SL", name: "138 Student Living Jamaica Limited"})
  }, []);

  useEffect(() => {
    fetchData();
  //  console.log(data)
  }, [selCompany]);
  
  useEffect(()=> {
 
    // let ticker = companiesInfo[0][1]    
    // let name = companiesInfo[0][0]
    // let blurb = companiesInfo[0][2]

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
    setOHLC(ohlcc)
    setVolume(volumec)
    setClosePrices(closePricesc)
  }, [data])

let fetchComp = async () => {
   let companyList = await axios.get("https://s3.ap-northeast-1.amazonaws.com/romallen.com/json/companies.json").then((res) => res.data)
   let compArr =  Object.values(companyList.companies)
   let opt = []
   compArr.forEach(element => {
    
     opt.push({value: element["ticker"], label: element["name"]})
   });
  // console.log(opt)
   setCompOptions(opt)
}

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
    // console.log(d)
  };

  
return (
      // /highstock
    <div>
       <Select
        defaultValue={selCompany}
        onChange={setSelCompany}
        options={compOptions}
      />
      <HighchartsProvider Highcharts={Highcharts} >
        <HighchartsStockChart  >
          <Chart zoomType="x" />
          <Title>{selCompany["name"]}</Title>
  
         
          <Legend>
            {/* <Legend.Title>Key</Legend.Title> */}
          </Legend>
          <Caption>{"THIS IS A BLURB"}</Caption>
          <Tooltip />
  
          <useHighcharts ></useHighcharts>

          <XAxis>
            {/* <XAxis.Title>TIME</XAxis.Title> */}
          </XAxis>

          <YAxis height={"60%"}>
            <YAxis.Title>Price</YAxis.Title>
            <CandlestickSeries id="price" name={selCompany["name"]} data={ohlc}/>
            {/* <AreaSplineSeries id="profit" name="Profit" data={dataC} /> */}
          </YAxis>

         <YAxis height={"20%"} top={"60%"}>
            <ColumnSeries id="volume" name="Volume" data={volume} yAxis={1}/>
          </YAxis>
          <YAxis height={"20%"} top={"80%"} id='volume' >
            {/* <ColumnSeries  name="Volume" data={volume} /> */}

            <Series type="macd" id= "overlay" data={data}  yAxis={2}></Series>
          </YAxis>
          {/* <YAxis>
            <Series type="apo" id= "overlay" data={ohlc} ></Series>
          </YAxis> */}

          <RangeSelector >
          
              <RangeSelector.Button count={1} type="month" >
                1m
              </RangeSelector.Button>,
              <RangeSelector.Button count={3} type="month">
                3m
              </RangeSelector.Button>,
              <RangeSelector.Button count={6} type="month">
                6m
              </RangeSelector.Button>,
              <RangeSelector.Button count={1} type="ytd">
                YTD
              </RangeSelector.Button>,
              <RangeSelector.Button count={12} type="month">
                1y
              </RangeSelector.Button>,
              <RangeSelector.Button type="all">All</RangeSelector.Button>
              
            {/* <RangeSelector.Input boxBorderColor="#7cb5ec" enabled="false"/> */}
          </RangeSelector>

          { <Navigator >
            <Navigator.Series seriesId="price"  />
            {/* {<Navigator.Series seriesId="volume" /> } */}
          </Navigator> }
        </HighchartsStockChart>
      </HighchartsProvider>
    
    </div>
     
   
  );
}
