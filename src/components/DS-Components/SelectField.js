import React from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "antd";
import propTypes from "prop-types";

const { Option } = Select;

const SelectField = ({ name, placeholder, options }) => {
  return (
    <>
      <Field name={name}>
        {({ form }) => (
          <Select placeholder={placeholder}>
            {options.map(item => {
              return <Option value={item.value}>{item.value}</Option>;
            })}
          </Select>
        )}
      </Field>
      <ErrorMessage name={name} />
    </>
  );
};

SelectField.propTypes = {
  name: propTypes.string,
  placeholder: propTypes.string
};

export default SelectField;
