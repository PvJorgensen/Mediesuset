import React from 'react'
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper'
import { SceneNav } from '../../components/sceneNav/sceneNav'
import { Artist } from '../../components/artists/Artist'

export const LineUp = () => {
  return (
    <ContentWrapper title="Lineup">
      <SceneNav />
      <Artist></Artist>

    </ContentWrapper>
  )
}
