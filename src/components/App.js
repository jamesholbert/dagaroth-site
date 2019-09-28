import React from 'react';

import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import Audio from './audio'

import herobackground from '../images/skyship5.png'
import hero from '../images/hero.jpg'
import mist from '../images/mist.jpg'
import birdrider0 from '../images/birdrider0.jpg'
import genesys from '../images/genesys.jpg'
import skyship1 from '../images/skyship1.jpg'
import doubloons from '../images/doubloons.jpeg'

import theDay from '../audio/the_day_the_mists_came.mp3'
import hereThereBe from '../audio/here_there_be_dragons.mp3'
import theFirstToSail from '../audio/the_first_to_sail_the_skies.mp3'
import tradingUnion from '../audio/trading_union.mp3'

const blue = '#00648E';
const orange = '#EDA17B';
const tan = '#F7DCA0';
const grey = '#868DA0';
const darkblue = '#19384D';

const getFontSize = size => window.innerWidth < 750 ? `${size * .6}rem` : `${size}rem`

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

const RelativeWrapper = styled.div`
  position: relative;
`

const Hero = styled.img`
  max-width: 100%;
`
const HeroText = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  text-align: center;
  font-size: ${getFontSize(10)};
  color: ${blue};
  font-family: pacifico;
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

const CenterText = styled.div`
  width: 100%;
  text-align: center;
`

const SmallLoreContainer = styled.div`
  display: grid;
  grid-template-columns: ${window.innerWidth > 800 ? '50% 50%' : '100%'};
`

const SmallLoreHeader = styled.div`
  text-align: center;
  font-size: ${getFontSize(3)};
  color: ${tan};
`

const SmallLoreSubHeader = styled(SmallLoreHeader)`
  font-size: ${getFontSize(2)};
`

const SmallLoreBody = styled.div`
  padding: 3rem;
  font-size: ${getFontSize(2)};
  color: ${tan};
`

const CenterWrapper = styled.div`
  text-align: center;
`

const Footer = styled(SubHeader)`
  margin-bottom: 2rem;
`

const App = () => {
  return (
    <PageWrapper>
      <Page>
        <RelativeWrapper>
          <Hero src={hero} />
          <HeroText>
            Dagaroth
          </HeroText>
        </RelativeWrapper>
        <SmallWhiteSpaceBuffer />
        <Header>
          An original campaign setting for the Genesys tabletop roleplaying system.
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
              the Playstation 1 game Legend of Lagaia
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
            would a skyship be without a helmsman and canoneers? Aloof archeologists can be found frequenting corsair vessels in 
            hopes to find and protect lost knowledge and uncover new secrets. 
          </p>
          Will you discover untold story and legend? 
          Assemble your crew. Dagaroth awaits.            
        </BodyText>
        <SmallWhiteSpaceBuffer />
        <Header>
          Lore:
        </Header>
        <SmallWhiteSpaceBuffer />
        <Parallax
            bgImage={mist}
            bgImageAlt="mist"
            strength={400}
        >
            <ParallaxDiv>
              <CenterText>
                The day the mists came
              </CenterText>
              <Audio src={theDay}/>
            </ParallaxDiv>
        </Parallax>
        <WhiteSpaceBuffer />
        <Parallax
            bgImage={birdrider0}
            bgImageAlt="dragon jockey"
            strength={400}
        >
            <ParallaxDiv color={grey}>
              <CenterText>
                Here there be dragons
              </CenterText>
              <Audio src={hereThereBe}/>
            </ParallaxDiv>
        </Parallax>
        <WhiteSpaceBuffer />
        <Parallax
            bgImage={skyship1}
            bgImageAlt="sky ship"
            strength={200}
        >
            <ParallaxDiv color={orange}>
              <CenterText>
                The first to sail the skies
              </CenterText>
              <Audio src={theFirstToSail}/>
          </ParallaxDiv>
        </Parallax>
        <WhiteSpaceBuffer />
        <Parallax
            bgImage={doubloons}
            bgImageAlt="trading union"
            strength={400}
        >
            <ParallaxDiv color={orange}>
              <CenterText>
                The Allied Islands Trading Union
              </CenterText>
              <Audio src={tradingUnion}/>
          </ParallaxDiv>
        </Parallax>
        <SmallWhiteSpaceBuffer />
        <Header>
          Additional world flavor:
        </Header>
        <SmallWhiteSpaceBuffer />
        <SmallLoreContainer>
          <div> 
            <SmallLoreHeader>
              Sidirume Harvesting
            </SmallLoreHeader>
            <SmallLoreBody>
              <p>
                After it was first discovered, Dragon Jockeys were the only ones agile enough to find the small amounts clustered 
                near clouds from time to time before it dissipated. 
              </p>
              <p>
                It took some time, but eventually they disovered that it was most common after a storm. This led to the most drastic 
                increase in sidirume gathering, which gave the blacksmiths who were working with it the freedom to 
                experiment and discover it's attraction to magnetic ores. 
              </p>
              <p>
                That quickly led to the harvesting method still employed today. By draping magnetically charged cables from ships 
                and sailing on top of clouds, they gather in hours what took days by storm chasing. More sidirume, more ships.
              </p>
              <p>
                For such a priceless resource, almost nothing is known about it, where it comes from, why it's there, or even what it is.
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Dagarazi
            </SmallLoreHeader>
            <SmallLoreBody>
              <p>
                No sailor would sail the sky without a dozen or more unique Dagarazi slates aboard the vessel. A game of wit and bluff, 
                each player chooses and places a symmetrical slate face down on the table and reveals them together to make the whole board. 
              </p>
              <p>
                The game proceeds by both players placing their pieces in designated squares on their half of the newly formed board. This part takes
                a good portion of time as both players try to read their opponents and figure out what strategy they employ.
              </p>
              <p>
                Before each piece is revealed, it moves 2 squares at a time. After being revealed, each piece, such as the dragon jockey, 
                all change behavior. Last player with pieces wins.
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              The Under Guild
            </SmallLoreHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Myths and Legends
            </SmallLoreHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
        </SmallLoreContainer>
        <SmallWhiteSpaceBuffer />
        <Header>
          The Crew:
        </Header>
        <SmallWhiteSpaceBuffer />
        <SmallLoreContainer>
          <div> 
            <SmallLoreHeader>
              The Cicada
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              2 Masted Sarmiento Class Brig
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <p>
                A front for a smuggling vessel, this travelling circus is home for many a corsair and smuggler alike (most of the 
                world building to come will be done playing a crew aboard this ship).
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Rick Chival
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Canoneer
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <p>
                A true gentleman. This former farmer is as equally unassuming as he sounds clueless. Just don't give him reason to 
                recall his special forces training.
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Felix Van' Knickerbottom
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Helmsman
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Cedric
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Archeologist
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
        </SmallLoreContainer>
        <Footer>
          Copyright 2019 James Holbert · All images are public domain
        </Footer>
      </Page>
    </PageWrapper>
  );
}

export default App;



// myths and legends

// cicada



// the crew