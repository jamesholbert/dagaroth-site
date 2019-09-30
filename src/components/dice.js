import React from 'react';
import styled from 'styled-components';

import success from '../images/success.png'
import failure from '../images/failure.png'
import despair from '../images/dispair.png'
import threat from '../images/threat.png'
import advantage from '../images/advantage.png'
import triumph from '../images/triumph.png'

const abilityGreen = '#47AC4E'
const profYellow = '#FFF034'
const challengeRed = '#D62F2C'
const boostBlue = '#A6D9F4'
const diffPurple = '#51277D'

const Result = styled.img`
	height: 18px;
	width: 18px;
	position: relative;
	top: 2px;
`

export const Success = () => <Result src={success} />
export const Failure = () => <Result src={failure} />
export const Threat = () => <Result src={threat} />
export const Despair = () => <Result src={despair} />
export const Advantage = () => <Result src={advantage} />
export const Triumph = () => <Result src={triumph} />

const DieWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 16px;
	top: -16px;
`

export const AbilityDieLeftBorder = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  background-color: transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  border-right: 8px solid black; 
`
export const AbilityDieRightBorder = styled.div`
  position: absolute;
  left: 8px;
  height: 0;
  width: 0;
  background-color: transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  border-left: 8px solid black; 
`
export const AbilityDieLeftSide = styled.div`
  position: absolute;
  left: 2px;
  top: 2px;
  height: 0;
  width: 0;
  background-color: transparent;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent; 
  border-right: 6px solid ${p => p.color || abilityGreen}; 
`
export const AbilityDieRightSide = styled.div`
  position: absolute;
  left: 8px;
  top: 2px;
  height: 0;
  width: 0;
  background-color: transparent;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent; 
  border-left: 6px solid ${p => p.color || abilityGreen}; 
`

export const Ability = () => <DieWrapper>
	<AbilityDieLeftBorder />
	<AbilityDieRightBorder />
	<AbilityDieLeftSide />
	<AbilityDieRightSide />
</DieWrapper>

export const Difficulty = () => <DieWrapper>
	<AbilityDieLeftBorder />
	<AbilityDieRightBorder />
	<AbilityDieLeftSide color={diffPurple} />
	<AbilityDieRightSide color={diffPurple} />
</DieWrapper>

export const Pentagon = styled.div`
	position: absolute;
	width: 10.8px;
	box-sizing: content-box;
	border-width: 10px 2.6px 0;
	border-style: solid;
	border-color: ${p => p.color || challengeRed} transparent;

	top: 9px;
	left: 2px;
	&:before {
	  content: "";
	  position: absolute;
	  height: 0;
	  width: 0;
	  top: -16px;
	  left: -3px;
	  border-width: 0 8px 6px;
	  border-style: solid;
	  border-color: transparent transparent ${p => p.color || challengeRed};
	}
`
export const PentagonBorder = styled.div`
	position: absolute;
	width: 12.8px;
	box-sizing: content-box;
	border-width: 12px 3.5px 0;
	border-style: solid;
	border-color: black transparent;

	top: 8px;
	&:before {
	  content: "";
	  position: absolute;
	  height: 0;
	  width: 0;
	  top: -19px;
	  left: -4px;
	  border-width: 0 10px 7.2px;
	  border-style: solid;
	  border-color: transparent transparent black;
	}
`

const PentagonWrapper = styled(DieWrapper)`
	width: 20px;
`

export const Challenge = () => <PentagonWrapper>
	<PentagonBorder />	
	<Pentagon />	
</PentagonWrapper>

export const Proficiency = () => <PentagonWrapper>
	<PentagonBorder />	
	<Pentagon color={profYellow} />	
</PentagonWrapper>

const SquareWrapper = styled(DieWrapper)`
	width: 22px;
`

const Square = styled.div`
	position: absolute;
	top: 1px;
	width: 16px;
	height: 16px;
	border: 2px solid black;
	background-color: ${p => p.color || 'black'};
`

export const Setback = () => <SquareWrapper>
	<Square />
</SquareWrapper>

export const Boost = () => <SquareWrapper>
	<Square color={boostBlue} />
</SquareWrapper>