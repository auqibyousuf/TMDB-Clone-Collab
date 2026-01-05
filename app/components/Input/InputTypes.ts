import { IconType } from 'react-icons'

export type InputType = {
  placeholder: string
  onChange?: React.ChangeEventHandler
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  defaultValue?: string
  extraClasses?: string
  variant: 'text' | 'search'
  icon?: IconType
}
