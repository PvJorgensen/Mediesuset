import React from 'react'
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper'
import { News } from '../../components/news/News'

export const FrontPage = () => {
  return (
    <ContentWrapper title="Nyheder">

    <News />
    </ContentWrapper>
  )
}
