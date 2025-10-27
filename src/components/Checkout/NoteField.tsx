import { TextField } from '@mui/material'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { FormData } from './types'

export default function NoteField({ control }: { control: Control<FormData> }) {
  return (
    <Controller
      control={control}
      name="note"
      render={({ field }) => (
        <TextField
          {...field}
          label="Коментар до замовлення (необовʼязково)"
          multiline
          minRows={3}
          fullWidth
        />
      )}
    />
  )
}
