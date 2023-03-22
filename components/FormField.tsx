import React from 'react'

type Props = {
  labelName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  handleChange?: any;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: any;
}

const FormField = (props: Props) => {
  return (
    <div>FormField</div>
  )
}

export default FormField