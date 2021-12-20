export interface ButtonProps {
  type: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children?: React.ReactNode
  disabled?: boolean
}
