import Backdrop from './overrides.backdrop';
import Button from './overrides.buttons';
import CssBaseline from './overrides.cssbaseline';
import Form from './overrides.form';
import Input from './overrides.input';
import Radio from './overrides.radio';

const componentsOverrides = (theme) => {
  return Object.assign(
    Form(theme),
    Input(theme),
    Radio(theme),
    Button(theme),
    Backdrop(theme),
    CssBaseline(theme)
  );
};

export default componentsOverrides;
