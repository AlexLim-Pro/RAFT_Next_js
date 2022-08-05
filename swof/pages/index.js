import React from "react";
// import "./styles.css";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import { Scatter, Line } from "react-chartjs-2";
import Papa from "papaparse";
// import { Map, TileLayer, FeatureGroup } from "react-leaflet";
// import { ShapeFile } from "react-leaflet-shapefile";

import * as d3 from "d3";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import line_map from "./components/line_map";

// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// // import { promises as fs } from "fs";

// // import FileReader from 'react-file-reader';

// // const reader = new FileReader();
// // reader.readAsText("/public/data/coords_San_Guad.csv")

// // const fs = require('fs');

// // const file = fs.createReadStream("/public/data/coords_San_Guad.csv");
// // import "/public/data/coords_San_Guad.csv";


// // // var coord_data;
// // fetch("/api/getCoords")
// // // .then((res) => res.json())
// // .then((data) => {
// //   // coord_data = data;
// //   console.log(data);
// // });

// import text from "/public/data/coords_San_Guad.txt";

// console.log(text);

// // var coord_data = Papa.parse("/public/data/coords_San_Guad.csv", {
// //   complete: function(results) {
// //     console.log(results.data);
// //   }
// // });
// // Papa.parse("/public/data/coords_San_Guad.csv", {
// //   header: true,
// //   step: function(result) {
// //     coord_data.push(result.data);
// //   },
// //   complete: function(results, file) {
// //     console.log("Complete", coord_data.length, "records.")
// //   }
// // })
// // console.log(coord_data);

// import * as river_shp from "/public/data/NHDFlowline_San_Guad.json";
// import * as river_shp from '/public/data/NHDFlowline_San_Guad.json' assert {type: 'json'}
// import * as river_shp from '/public/data/NHDFlowline_San_Guad_topology.json' assert {type: 'json'}


import goias from "/public/data/NHDFlowline_San_Guad.json";
import {SquaredMap} from "react-geo-grapher";
import riv_d from "/public/data/coords_San_Guad.csv" assert {type: 'csv'};
import connectivity from "/public/data/rapid_connect_San_Guad.json" assert {type: 'json'};
console.log(riv_d)
console.log(connectivity)
// let u = d3.select('#content g.map')
//   .selectAll('path')
//   .selectAll('path')
//   .selectAll('path')
//   .data(geojson.features)
//   .join('path')
//   .attr('d', geoGenerator);

// import dynamic from 'next/dynamic'

// const river_shp = dynamic(() => import('/public/data/NHDFlowline_San_Guad.json'), {
//   ssr: false
// })

// export default () => <DynamicComponentWithNoSSR />

import {BarMap} from  'react-geo-grapher'




// console.log(river_shp.features);
// console.log(riv_d);

// let projection = d3.geoEquirectangular();

// let geoGenerator = d3.geoPath().projection(projection);

// var width = 500;
// var height = 300;
// var svg = d3.select("svg")
//   .attr("width",width)
//   .attr("height",height);

if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

// var projection = d3.geoIdentity()
// var path = d3.geoPath(projection);

  
// svg.selectAll("path")
//   .data(river_shp.features)
//   .enter()
//   .append("path")
//   .attr("d", path);
// d3.json('/public/data/NHDFlowline_San_Guad.json', function(err, json) {
//   createMap(json);
// });
// let u = d3.select('#content g.map')
//   .selectAll('path')
//   .data(myJson.features)
//   .join('path')
//   .attr('d', geoGenerator);

import riv_data from "/public/data/coords_San_Guad.json" assert {type: 'json'};
import { active } from "d3";
import { NodeNextRequest } from "next/dist/server/base-http/node";

var datasets = [];

for(var i in riv_data.coords) {
  datasets.push({
    label: riv_data.coords[i].data,
    data: [riv_data.coords[i]],
    fill: false,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)"
  })
  // console.log(riv_data.coords[i]);
}

const data = {
  datasets: datasets
  // datasets: [
  //   {
  //     label: "Data Points",
  //     data: riv_data.coords,
  //     fill: false,
  //     backgroundColor: "rgba(75,192,192,0.2)",
  //     borderColor: "rgba(75,192,192,1)"
  //   }
  // ]
};

const options = {
  label: "Interactive Map of Rivers",
  $shared: false,
  borderWidth: 0.1,
  // hover: {mode: null},
  events: ["click", "onHover", "label", "tooltip", "touchstart", "touchmove",
   "mousemove",
  ],
  // ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
  onHover: (event, item) => {
    // console.log(item);
  },
  // onClick: (context, activeElements) => {
  //   // console.log(context.raw.data);
  //   console.log("clicked start");
  //   console.log(context);
  //   console.log(context.chart.data.datasets);
  //   try {
  //     console.log(context.chart.data.datasets[0].data[0].data);
  //   }
  //   catch(err) { }
  //   try {
  //     var clickedElement = activeElements[0].element.$context.raw.data;
  //   }
  //   catch(err) { }
    
  //   console.log(activeElements);
  //   console.log("Clicked on " + clickedElement);
  //   var downstreamList = [];
  //   // downstreamList.push(clickedElement);
  //   var currentElement = clickedElement;
  //   // console.log("currentElement:");
  //   // console.log(connectivity)
  //   var connectivity_list = [];
  //   for(var i in connectivity) {
  //     for(var j in connectivity[i]) {
  //       connectivity_list.push(`${j}`);
  //     }
  //   }
  //   console.log(toString(currentElement))
  //   if(connectivity_list.includes(`${currentElement}`)) {
  //     console.log("correct");
  //     console.log(connectivity[`${currentElement}`]);
  //   }
  //   else {
  //     console.log("incorrect");
  //     console.log(connectivity);
  //   }
  //   while(connectivity_list.includes(`${currentElement}`)) {
  //     downstreamList.push(`${currentElement}`);
  //     console.log(connectivity_list.indexOf(currentElement));
  //     currentElement = connectivity[`${connectivity_list.indexOf(currentElement)}`];
  //   }
  //   console.log("downstreamList:");
  //   console.log(downstreamList);
  //   console.log("connectivity_list");
  //   console.log(connectivity_list);
  //   // if(downstreamList.length != 0) {
  //     for(var i in context.chart.data.datasets) {
  //       // console.log("i:");
  //       // console.log(i);
  //       if(!(downstreamList.includes(`${context.chart.data.datasets[i]}`))) {
  //         // context.chart.data.datasets[i].backgroundColor = "rgba(75,192,192,0.002)",
  //         // context.chart.data.datasets[i].borderColor = "rgba(75,192,192,0.01)";
  //         // context.chart.data.datasets[i].options.backgroundColor = "rgba(255,255,255,1)",
  //         // context.chart.data.datasets[i].options.borderColor = "rgba(255,255,255,1)";
  //         // context.chart.data.datasets[i].backgroundColor = "rgba(255,255,255,1)",
  //         context.chart.data.datasets[i].borderColor = "rgba(255,255,255,1)";
  //       }
  //     }
  //   // }
  //   context.chart.update();
  //   // for(let i = 0; i < activeElements.length; i++) {
  //   //   // activeElements[i].element.options.$animations.borderColor = null;
  //   //   activeElements[i].element.options.borderColor = "rgba(75,192,192,0.1)";
  //   //   // activeElements[i].element.display = false;
  //   //   // activeElements[i].element.hover = {mode: null};
  //   //   // activeElements[i].display = false;
  //   // }
  //   // const activePoint = getElementAtEvent(context);
  //   // const datasetIndex = activePoint[0]._datasetIndex;
  //   // const itemIndex = activePoint[0]._index;
  //   // console.log(activePoint)
  //   // console.log(datasetIndex)
  //   // console.log(itemIndex)
  //   console.log("clicked done")
  // },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `River ${context.raw.data}: (${context.raw.x.toFixed(5)}, ${context.raw.y.toFixed(5)})`
        },
      }
    },
    title: {
      display: true,
      text: "Interactive Map of Rivers",
    },
    x: {
      display: true,
      text: "Longitude",
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        align: "center",
        text: "Longitude"
      }
    },
    y: {
      title: {
        display: true,
        align: "center",
        text: "Latitude"
      }
    },
  }
}



function drawMap(err, world) {
  if (err) throw err
  svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);
  svg.append("path")
    .datum(graticule.outline)
    .attr("class", "foreground")
    .attr("d", path);
  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .enter().append("path")
    .attr("d", path);
}

export default function App() {
  return (
    <div className="App">
      {/* <Scatter data={data} options={options} style={{position:"absolute"}}/> */}
      <Scatter data={data} options={options} style={{position:"absolute"}}/>
      {/* <Line data={data} options={options} style={{position:"absolute"}}/> */}
      {/* <div>
        <svg width="960" height="600"></svg>
        <div width="960" height="600">
        <line_map width="960" height="600"></line_map>
        </div> */}
        {/* <svg width="960" height="600"></svg> */}
      {/* <BarMap
        style={{ width: "400px", background: "#ffffff" }}
        geojson={goias}
        percents={[40, 30, 30]}
        colors={['#040DA6', '#10863C', '#920B8E']}
        scale={5500}
      /> */}
      {/* <line_map/> */}
      {/* <ComposableMap>
      <Geographies geography="/data/NHDFlowline_San_Guad_topology.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap> */}
    {/* </div> */}
    </div>
  );
}
