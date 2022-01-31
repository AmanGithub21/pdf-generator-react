import { Form, FormField, TextInput, Box, Button } from "grommet";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "./ComponentToPrint";
import "./Myform.css";

function Myform() {
  const [name, setName] = useState("Jhon Wick");
  const [likes, setLikes] = useState("Taking revenge for dogs");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleReset = () => {
    setName("");
    setLikes("");
  };
  return (
    <div className="form-container">
      <Form onReset={handleReset} onSubmit={handlePrint}>
        <FormField name="name" htmlFor="name" label="Name">
          <TextInput
            className="input-name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField name="likes" htmlFor="likes" label="What do you like to do">
          <TextInput
            className="input-likes"
            id="likes"
            name="likes"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </FormField>
        <Box direction="row" gap="medium" margin={{ top: "3rem" }}>
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>

      <div style={{ display: "none" }} className="">
        <ComponentToPrint likes={likes} name={name} ref={componentRef} />
      </div>
    </div>
  );
}

export default Myform;
