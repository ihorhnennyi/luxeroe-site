import { Stack, TextField } from '@mui/material'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import PhoneField from './PhoneField'
import type { FormData } from './types'

export default function CustomerFields({ control }: { control: Control<FormData> }) {
  return (
    <Stack spacing={1.5}>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: 'Обовʼязково' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Імʼя *"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{ required: 'Обовʼязково' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Прізвище *"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />

      <PhoneField control={control} name="phone" />
    </Stack>
  )
}
