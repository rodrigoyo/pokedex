import React from 'react'

import NextHead from 'next/head'

const Head: React.FC = ({ children }) => {
  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  )
}

export default Head
