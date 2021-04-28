import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";

const App = () => {
    const [data, loading] = useFetch(
        "https://github.com/CarolWang820/react-parcel-test-upload/blob/main/countries%20of%20the%20world.csv"
      );
    
    const worldData = extent(data, (d) => {
        return +d["Ladder score"];
    });
    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment2, INFO474</h1>

        </div>
    );
};

export default App;

