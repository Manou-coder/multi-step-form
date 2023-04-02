import React from 'react'

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[65%] flex flex-col justify-start gap-8 text-MarineBlue">
      {children}
    </div>
  )
}
