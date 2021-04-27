import React from "react";
import {csv} from "d3-fetch";

const App = () => {
    csv("https://github.com/CarolWang820/react-parcel-test-upload/blob/main/weather.csv")
    .then((data) => console.log(data));
    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment2, INFO474</h1>

        </div>
    );
};

export default App;

