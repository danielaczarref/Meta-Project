export type IconProps = {
  id?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  primaryColor?: string
  secundaryColor?: string
  viewBox?: string
  onClick?(): void
  name:
    | undefined
    | string
}
