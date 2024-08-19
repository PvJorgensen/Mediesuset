import React from 'react'
import { ContentWrapperStyle } from './ContentWrapper.style.js'

export const ContentWrapper = ({title, subtitle, description, children }) => {
    document.title = title;

    if (description) {
        document
            .querySelector('meta[name="description"]')
            .setAttribute("content", description)
    }


  return (
    <ContentWrapperStyle>
    <h2>{title}</h2>
    {subtitle && <h3>{subtitle}</h3>}
    <div>{children}</div>
    </ContentWrapperStyle>
  )
}
