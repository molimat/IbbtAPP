import React from "react";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Remote debugger is in"]);

import Routes from "./routes";

const App = () => <Routes />;

export default App;
