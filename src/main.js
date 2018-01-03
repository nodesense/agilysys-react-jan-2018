//bootstapping react app
import React from "react";
import {render} from "react-dom";

import {App} from "./app/App";
 
//bind virtual dom and real dom
//data flow Virtual DOM => Real DOM
//Diffing and patching real dom
render(<App />, //virtual dom
       document.getElementById("root") //Real DOM
 );