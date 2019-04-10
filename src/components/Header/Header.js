import React from 'react'
import Link from 'next/link'
import { Tag } from './Header.sc'

const Header = () => (
  <>
    <Link href="/">
      <Tag>Home</Tag>
    </Link>
    <Link href="/about">
      <Tag>About</Tag>
    </Link>
  </>
)

export default Header