export type ButtonType = {
  text: string
  variant?: 'hero-section' | 'tab'
  extraClasses?: string
  onClick?: React.MouseEventHandler
  value?: string
  dataButton?: string | boolean
}
