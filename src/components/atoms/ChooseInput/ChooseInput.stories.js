import React from 'react';
import { storiesOf } from '@storybook/react';
import ChooseInput from './ChooseInput';

storiesOf('Choose input', module)
  .add('Radio', () => <ChooseInput type="radio" id="myIDRadio" name="inputRadio" />)
  .add('Checkbox', () => <ChooseInput type="checkbox" id="myIDCheckbox" name="inputRadio" />);
