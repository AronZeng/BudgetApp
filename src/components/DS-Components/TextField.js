import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "antd";
import propTypes from "prop-types";
const TextField = ({ name, form }) => {
  return (
    <>
      <Field name={name}>
        {({ form }) => {
          return <Input placeholder={name} />;
        }}
      </Field>
      <ErrorMessage name={name} />
    </>
  );
};

TextField.propTypes = {
  name: propTypes.string
};

export default TextField;
