import { TextField } from '@mui/material'
import { forwardRef } from 'react'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'

type Props = { control: Control<any>; name: string }

type MaskProps = {
  name?: string
  onChange: (event: { target: { name?: string; value: string } }) => void
  value?: string
}

const PhoneMask = forwardRef<HTMLInputElement, MaskProps>(function PhoneMask(
  { onChange, ...rest },
  ref
) {
  return (
    <IMaskInput
      {...rest}
      inputRef={ref as any}
      mask="+{380} 00 000 00 00"
      lazy={false}
      autofix
      overwrite
      onAccept={(val: string) => onChange({ target: { name: rest.name, value: val } })}
    />
  )
})

export default function PhoneField({ control, name }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: 'Обовʼязково',
        validate: (v: string) =>
          /^\+380 \d{2} \d{3} \d{2} \d{2}$/.test(v || '') || 'Перевірте формат телефону'
      }}
      render={({ field, fieldState }) => (
        <TextField
          label="Телефон *"
          fullWidth
          name={name}
          value={field.value ?? ''}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          InputProps={{ inputComponent: PhoneMask as any }}
        />
      )}
    />
  )
}
