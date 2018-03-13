import React from 'react';
import { storiesOf } from '@storybook/react';
import FormButton from './index';

storiesOf('FormButton', module)
  .add('primary', () => (
    <FormButton >Botão primário</FormButton>
  ))
  .add('outline', () => (
    <FormButton outline>Botão Outline</FormButton>
  ));