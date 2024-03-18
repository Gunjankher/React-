import React from 'react'

 export default function Button({
    children,
    type = "button",
    bgcolor = "bg-blue-logo",
    textcolor = "",
    ...props


}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
  )
}

