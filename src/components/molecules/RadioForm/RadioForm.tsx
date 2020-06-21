import React from 'react';
import styled from 'styled-components';
import RadioCheck from 'components/molecules/RadioCheck/RadioCheck';

const Form = styled.form`
  display: flex;

  > label:first-of-type {
    margin-right: 30px;
  }
`;

interface SignleInput {
  id: string;
  label: string;
  type: 'radio' | 'checkbox';
  name: string;
  onChange: () => void;
  checked: boolean;
}

interface Props {
  inputs: SignleInput[];
}

const RadioForm = ({ inputs }: Props) => (
  <Form>
    {inputs.map((i) => (
      <RadioCheck
        key={i.id}
        id={i.id}
        label={i.label}
        type={i.type}
        name={i.name}
        onChange={i.onChange}
        checked={i.checked}
      />
    ))}
  </Form>
);

export default RadioForm;
