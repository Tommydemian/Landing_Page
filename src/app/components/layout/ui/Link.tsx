import React from 'react'

interface Props {
    linkUrl: string;
    children: React.ReactNode;
}

const Link = ({ linkUrl, children }: Props) => {
  return (
    <a href={linkUrl} className="cursor-pointer bg-accent text-black button-base rounded-lg px-5 py-5 flex">
      {children}
    </a>
  )
}

export default Link
