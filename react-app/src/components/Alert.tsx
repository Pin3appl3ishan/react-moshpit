interface Props{
    children: ReactNode; // using ReactNode so that we can pass complex html elements inside the component in app.tsx
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className='alert alert-primary alert-dismissible'>{children}
    <button type="button" className="btn-close" onClick = {onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert