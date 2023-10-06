export type ButtonType = {
  text: string
  variant?: 'hero-section' | 'tabs'
  extraClasses?: string
  onClick?: React.MouseEventHandler
  value?: string
}
