import React from 'react';
import styled from 'styled-components';

import { getFontSize } from '../helpers'

import Brawn from '../images/stats/brawn.svg'
import Agility from '../images/stats/agility.svg'
import Intellect from '../images/stats/intellect.svg'
import Cunning from '../images/stats/cunning.svg'
import Willpower from '../images/stats/will.svg'
import Presence from '../images/stats/presence.svg'

const StatBlockContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const StatBlockWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
`

const SingleStatWrapper = styled.div`
  position: relative;
`

const SingleStatImage = styled.img`
  width: 6rem;
`

const SingleStatValue = styled.div`
  position: absolute;
  color: black;
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  top: 0;
  width: 100%
`

const SingleStat = ({ value, url }) => (
  <SingleStatWrapper>
    <SingleStatImage src={url} alt={url} />
    <SingleStatValue>{value}</SingleStatValue>
  </SingleStatWrapper>
)

const CharacterStatBlock = ({ 
  brawn,
  agility,
  intellect,
  cunning,
  willpower,
  presence,
  wound,
  strain,
  xp,
  skills
}) => {
  return (
    <StatBlockContainer>
      <StatBlockWrapper>
        <SingleStat url={Brawn} value={brawn} />
        <SingleStat url={Agility} value={agility} />
        <SingleStat url={Intellect} value={intellect} />
        <SingleStat url={Cunning} value={cunning} />
        <SingleStat url={Willpower} value={willpower} />
        <SingleStat url={Presence} value={presence} />
      </StatBlockWrapper>
    </StatBlockContainer>
  )
}


export default CharacterStatBlock;
