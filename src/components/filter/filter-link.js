'use strict'

import React from 'react'

const FilterLink = ({ action, activeFilter, onClick, children }) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', onClick }

  const component = action === activeFilter ? span : a

  if (action === activeFilter) {
    return <span style={{marginRight: 10}}>{children}</span>
  }
  return (
    <component.tag
      href={component.href}
      style={{ marginRight: 10 }}
      onClick={component.onClick}
    >
      {children}
    </component.tag>
  )
}

export default FilterLink
