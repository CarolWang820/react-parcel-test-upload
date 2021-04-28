import React from "react";
import { useFetch } from "./hook/useFetch.js";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";

const App = () => {
    const [data, loading] = useFetch(
        "https://github.com/CarolWang820/react-parcel-test-upload/blob/main/countries%20of%20the%20world.csv"
      );
    
    const worldData = extent(data, (d) => {
        return +d["Ladder score"];
    });

    const size = 500;
    const margin = 20;
    const yScale = scaleLinear()
        .domain(worldData)  
        .range([size - margin, size - 350]);

    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
            <p>{loading && "Loading data!"}</p>

            <h2>World countries analysis</h2>


        </div>
    );

};

export default App;

