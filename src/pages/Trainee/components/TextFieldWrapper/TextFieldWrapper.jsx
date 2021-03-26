import { React } from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextFieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);
  const configureTextField = {
    ...otherProps,
    ...field,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configureTextField.error = true;
    configureTextField.helperText = mata.error;
  }
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...configureTextField}
      fullWidth
    />
  );
};

TextFieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextFieldWrapper;
