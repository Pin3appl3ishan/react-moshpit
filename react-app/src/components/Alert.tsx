
interface Props{
    children: ReactNode; // using ReactNode so that we can pass complex html elements inside the component in app.tsx
}

const Alert = ({children}: Props) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert