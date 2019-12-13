import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Formsearch = () => {
  return (
    <div className="formsearchdiv">
      <Form className="formsearch" inline>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='search' className='mr-sm-2'></Label>
          <Input
            style={{ textAlign: `center` }}
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='Search Name'
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Formsearch;
