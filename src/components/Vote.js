import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { send } from "../socketApi";

function Vote({ activeVoteOne, activeVoteTwo }) {
  const [voteOne, setVoteOne] = useState(activeVoteOne);
  const [voteTwo, setVoteTwo] = useState(activeVoteTwo);

  useEffect(() => {
    send("newVoteOne", voteOne);
  }, [voteOne]);

  useEffect(() => {
    send("newVoteTwo", voteTwo);
  }, [voteTwo]);

  const voteOneIncrease = () => {
    setVoteOne(voteOne + 1);
  };

  const voteTwoIncrease = () => {
    setVoteTwo(voteTwo + 1);
  };

  return (
    <div>
      <h1>Please Vote For Team!</h1>
      <Formik
        initialValues={{
          picked: "",
        }}
        onSubmit={(values) => {
          if (values.picked === "One") {
            return voteOneIncrease();
          }

          if (values.picked === "Two") {
            return voteTwoIncrease();
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Vote</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field
                  // onClick={voteOneIncrease}
                  type="radio"
                  name="picked"
                  value="One"
                />
                One
              </label>
              <label>
                <Field
                  // onClick={voteTwoIncrease}
                  type="radio"
                  name="picked"
                  value="Two"
                />
                Two
              </label>
              <div>Picked Team: {values.picked}</div>
            </div>
            <button type="submit">Vote</button>
            <div>Vote Team One: {activeVoteOne}</div>
            <div>Vote Team Two: {activeVoteTwo}</div>
            <div></div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Vote;
