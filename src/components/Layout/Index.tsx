import React, { FC } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children }: Props) => {
  return <div className="w-screen min-h-screen flex flex-col">{children}</div>
}

export default Layout