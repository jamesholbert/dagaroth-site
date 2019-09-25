import React from 'react';

import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import herobackground from './images/skyship5.png'
import mist from './images/mist.jpg'
import birdrider0 from './images/birdrider0.jpg'
import genesys from './images/genesys.jpg'
import skyship1 from './images/skyship1.jpg'

import theDay from './audio/the_day_the_mists_came.mp3'
import theFirstToSail from './audio/the_first_to_sail_the_skies.mp3'
import hereThereBe from './audio/here_there_be_dragons.mp3'

const blue = '#00648E';
const orange = '#EDA17B';
const tan = '#F7DCA0';
const grey = '#868DA0';
const darkblue = '#19384D';

const getFontSize = size => window.innerWidth < 500 ? `${size * .6}rem` : `${size}rem`

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${grey};
  color: ${tan};
`

const Page = styled.div`
  width: 1200px;
  
  @media (max-width: 1200px) {
    width: 100%
  }
`

const Hero = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  background-image: url(${herobackground});
  background-repeat: no-repeat;
  background-position: top center;
  font-size: ${getFontSize(10)};
  font-family: pacifico;
  color: ${blue};
  overflow: hidden;

  :after {
    content: ${window.innerHeight > 720 ? '' : "'scroll'"};
    position: absolute;
    bottom: 1vh;
    font-size: ${getFontSize(2)};
    font-family: barlow;
  };
`

const SmallWhiteSpaceBuffer = styled.div`
  height: 10rem;
`
const WhiteSpaceBuffer = styled.div`
  height: 20rem;
`

const ParallaxDiv = styled.div`
  height: 40rem;
  margin: 10rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: ${p => p.color || tan};
  color: white;
  font-size: 5rem;
`

const BannerWrapper = styled.div`
  margin: 10rem 0 0 0;
  width: 100%;
  text-align: center;
`

const FullWidthImage = styled.img`
  width: 100%;
`

const Header = styled.div`
  font-size: ${getFontSize(7)};
  text-align: center;
  color: ${darkblue};
`

const SubHeader = styled(Header)`
  font-size: ${getFontSize(3)};
`

const BodyText = styled.div`
  font-family: Questrial;
  font-size: ${getFontSize(3)};
  text-align: left;
  width: 95%;
  position: relative;
  left: 1rem;
`

const Footer = styled(SubHeader)`
  margin-bottom: 2rem;
`

const App = () => {
  return (
    <PageWrapper>
      <Page>
        <Hero>
          <span>
            Dagaroth
          </span>
        </Hero>
        <SmallWhiteSpaceBuffer />
        <Header>
          An original campaign setting for the Genesys roleplaying system.
        </Header>
        <BannerWrapper>
          <FullWidthImage style={{maxWidth: '800px'}} src={genesys} />
        </BannerWrapper>
        <SmallWhiteSpaceBuffer />
        <BodyText>
          Inspired in part by
          <ul>
            <li>
              an original story setting written by Matthew Leon Parker
            </li>
            <li>
              the World of Speir, a similar story setting from the SkyJacks Campaign podcast,
            </li>
            <li>
              the playstation game Legend of Lagaia
            </li>
          </ul>
        </BodyText>
        <SmallWhiteSpaceBuffer />
        <Header>
          Synopsis:
        </Header>
        <SmallWhiteSpaceBuffer />
        <BodyText>
          <p>
            Centuries have passed since a strange mist covered the entire world in this almost-steampunk pre-renaissance dystopia. 
          </p>
          <p>
            Only on the highest hills and mountains can civilization survive. Sail the skies to the inner islands that are 
            bustling with activity and seek to find trade garrisons after visiting settlements saturated with verdant fields.
          </p>
          <p>
            Hide under the oppressive gaze of the Allied Islands Trading Union, or defy them outright and openly becomes pirates.
            Though not all vocation need be on a skyship, there's no shortage of things to do on one. Every ship needs a chief 
            engineer to direct routing of pressure and temperature through sidirume pipes to maneuver and stay aloft; and what 
            would a skyship be without a helmsman and canoneers? Aloof librarians can be found frequenting corsair vessels in 
            hope to find and protect lost knowledge and uncover new secrets. 
          </p>
          Will you discover untold story and legend? 
          Assemble your crew. Dagaroth awaits.            
        </BodyText>
        <SmallWhiteSpaceBuffer />
        <Header>
          Lore:
        </Header>
        <SubHeader>(audio samples)</SubHeader>
        <SmallWhiteSpaceBuffer />
        <Parallax
            bgImage={mist}
            bgImageAlt="mist"
            strength={400}
        >
            <ParallaxDiv>
              <div>
                The day the mists came
              </div>
              <div>
                <Audio src={theDay}/>
              </div>
            </ParallaxDiv>
        </Parallax>
        <WhiteSpaceBuffer />
        <Parallax
            bgImage={birdrider0}
            bgImageAlt="dragon jockey"
            strength={400}
        >
            <ParallaxDiv color={grey}>
              Here there be dragons
              <div>
                <Audio src={hereThereBe}/>
              </div>
            </ParallaxDiv>
        </Parallax>
        <WhiteSpaceBuffer />
        <Parallax
            bgImage={skyship1}
            bgImageAlt="sky ship"
            strength={200}
        >
            <ParallaxDiv color={orange}>
              The first to sail the skies
              <div>
                <Audio src={theFirstToSail}/>
              </div>
          </ParallaxDiv>
        </Parallax>
        <Footer>
          Copyright 2019 James Holbert · All images are public domain
        </Footer>
      </Page>
    </PageWrapper>
  );
}

export default App;

const Audio = props => <audio style={{width: window.innerWidth < 450 ? '200px' : '400px'}} {...props} controls="controls">
  Your browser does not support the audio element.
</audio>