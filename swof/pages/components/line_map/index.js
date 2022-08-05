// import "./styles.css";
import * as ReactDOM from 'react-dom';

import { BarMap } from "react-geo-grapher";
// import goias from "goias.json";

import markers from "/public/data/NHDFlowline_San_Guad_topology.json";

export default function line_map() {
    const chartWidth = 300;
    const chartHeight = 300;
    const backgroundColor = "#EAF2FA";
    const landColor = "#09A573";
    const landStroke = "#FCF5E9";
    const markerColor = "#E26F99";
    
    const projection = d3.geoMercator()
                        .scale([180])
                        .center(markers[0].geometry.coordinates)
                        .translate([chartWidth / 3, chartHeight / 3]);
    
    const pathGenerator = d3.geoPath(projection);
    
    const svg = d3.create('svg')
                    .attr("title", "Map")
                    .attr('width', chartWidth)
                    .attr('height', chartHeight)
    
    svg.append("rect")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr('fill', backgroundColor);
    
    svg.selectAll('path')
            .data(au_and_nz.features)
            .join('path')
            .attr('d', pathGenerator)
            .attr('fill', landColor)
            .attr('stroke', landStroke)
            .attr('stroke-width', 1);
    
    svg.selectAll("circle")
        .data(markers)
        .join("circle")
        .attr("cx", d => projection(d.geometry.coordinates)[0])
        .attr("cy", d => projection(d.geometry.coordinates)[1])
        .attr("r", 4)
        .attr("fill-opacity", 0.5)
        .attr("fill", markerColor)
        .attr("stroke", markerColor);
    
    return svg.node();
//   console.log(goias);
//   return (
//     <div
//       className="App"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//       }}
//     >
//       <h1>{"<BarMap/>"}</h1>

//       <BarMap
//         style={{ width: "400px", background: "#ffffff" }}
//         geojson={goias}
//         percents={[40, 30, 30]}
//         colors={["#040DA6", "#10863C", "#920B8E"]}
//       />

//       <h4>react-geo-grapher</h4>
//       <a target="_blank" href="https://github.com/italosll/react-geo-grapher">
//         https://github.com/italosll/react-geo-grapher
//       </a>
//     </div>
//   );
}
