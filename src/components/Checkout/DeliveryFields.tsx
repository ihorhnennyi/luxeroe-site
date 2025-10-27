import { Stack, TextField } from '@mui/material'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { FormData } from './types'

export default function DeliveryFields({ control }: { control: Control<FormData> }) {
  return (
    <Stack spacing={1.5}>
      <Controller
        control={control}
        name="city"
        rules={{ required: 'Обовʼязково' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Місто *"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        rules={{ required: 'Обовʼязково' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Відділення Нової пошти *"
            placeholder="Наприклад: Відділення №6"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
    </Stack>
  )
}
