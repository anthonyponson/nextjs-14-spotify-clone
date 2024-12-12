import { forwardRef, HtmlHTMLAttributes } from "react";


interface InputProps 
extends React.InputHTMLAttributes<HtmlHTMLAttributes>{}
const Input = forwardRef<HTMLInputElement,InputProps>(({
  className,
  type,
  disabled,
  ...props
},ref) => {
  return (
    <input
    type={type}
    className={`
    flex
    w-full
    rounded-full
    bg-neutral-700
    border-2
    border-transparent
    px-3
    py-2
    text-sm
    file:border-0
    file:bg-transparent
    file:text-sm
    file:font-medium
    placeholder:text-neutral-400
    disabled:cursor-not-allowed
    disabled:opacity-50
    focus:outline-none
    ${className}
    `}
    disabled={disabled}
    ref={ref}
    {...props}
    />
  )
})

export default Input;