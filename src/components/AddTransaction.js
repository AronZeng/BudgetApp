import React from "react";
import { Card, Form, Input, Button, Select, DatePicker } from "antd";
import { Box, Flex } from "rebass";
import { Formik } from "formik";
import Stack from "./DS-Components/Stack";
import TextField from "./DS-Components/TextField";
import SelectField from "./DS-Components/SelectField";

const transactionTypes = [{ value: "Income" }, { value: "Spending" }];

const AddTransactions = () => {
  return (
    <Card style={{ marginLeft: "25%", marginRight: "25%" }}>
      <Formik
        enableReinitialize
        render={props => (
          <Stack
            flexDirection="column"
            spacing="md"
            p="md"
            ml={1 / 4}
            mr={1 / 4}
          >
            <TextField name="name" {...props} />
            <SelectField
              name="type"
              {...props}
              options={transactionTypes}
              placeholder="Transaction Type"
            />
            <TextField name="name" {...props} />
            <TextField name="name" {...props} />
          </Stack>
        )}
      ></Formik>
    </Card>
  );
};

export default AddTransactions;
