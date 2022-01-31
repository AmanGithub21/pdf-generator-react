import { useRef } from "react";
import { Grommet } from "grommet";

import Myform from "./Myform";
import Navbar from "./Navbar";

function App() {
  return (
    <Grommet plain>
      <Navbar />
      <Myform />
    </Grommet>
  );
}

export default App;
