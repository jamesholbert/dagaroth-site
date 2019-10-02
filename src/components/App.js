import React, { Fragment } from 'react';

import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import Audio from './audio'
import Table from './table'
import Accordion from './accordion'

import useWidth from '../hooks/useWidth'

import { criticalHitsOnShip, additionalVehicleActions, jockeyActions } from '../helpers/tables'
import { getFontSize } from '../helpers'

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


const App = () => {
  const wide = useWidth();

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
    font-size: ${getFontSize(10, wide)};
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
    font-size: ${getFontSize(7, wide)};
    text-align: center;
    color: ${darkblue};
  `

  const SubHeader = styled(Header)`
    font-size: ${getFontSize(3, wide)};
  `

  const LinkHeader = styled(SubHeader)`
    color: ${blue};
    cursor: pointer;
    text-decoration: underline;
  `

  const BodyText = styled.div`
    font-family: Questrial;
    font-size: ${getFontSize(3, wide)};
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
    grid-template-columns: ${wide ? '50% 50%' : '100%'};
  `

  const SmallLoreHeader = styled.div`
    text-align: center;
    font-size: ${getFontSize(3, wide)};
    color: ${tan};
  `

  const BigLoreContainer = styled.div`
    ${wide && 'grid-column: span 2'};
  `

  const SmallLoreSubHeader = styled(SmallLoreHeader)`
    font-size: ${getFontSize(2, wide)};
  `

  const SmallLoreBody = styled.div`
    padding: 3rem;
    font-size: ${getFontSize(2, wide)};
    color: ${tan};
  `

  const CenterWrapper = styled.div`
    text-align: center;
  `

  const Footer = styled(SubHeader)`
    margin-bottom: 2rem;
  `


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
              an original story setting written by <a href='http://www.matthewparker.io/' rel="noopener noreferrer" target='_blank'>Matthew Leon Parker</a>
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
          Synopsis
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
          Lore
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
          Additional world flavor
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
          <BigLoreContainer>
            <SmallLoreHeader>
              Aerial Combat
            </SmallLoreHeader>
            <SmallLoreBody>
              <p>
                Since cannon fire is the most dangerous thing in the sky, seeing as how a well placed shot can sunder the sidirume pipes 
                that are supposed to be keeping the ship aloft, shipwrights take every measure to make vessels as unsinkable as possible. 
                There is no surviving a crash landing into the mist after all.
              </p>
              <p>
                Even pirates often make the gentlemen's play and leave opposing ships limping, as opposed to sinking them and turning
                them into even more drowned. Death is a cruel mistress, but it knows nothing of the cruelty of living as one of them. 
                Not even a pirate wishes that on a foe.
              </p>
              <p>
                Captains have even been known to execute their crew on the descent so as to keep them from receiving the sailor's portion.
              </p>
              <p>
                Along with discovering that sidirume floats when heated in steel, the blacksmiths of old, clever as they were, 
                discovered another thing or two about the mysterious powder. To try and avoid sinking, on the underside of the 
                ships hull, you'll usually spot large drums every 10 or 20 feet. These allow for the steam to spin a turbine made 
                of a not so dissimilar sidirume alloy and repel canon fire. Using this technique, helmsman are also able, through 
                coordinating with the engineers, to tack against the wind, even without a dense counter substance like water.
              </p>
              <p>
                Ship engineers usually have apprentices on board who double as pipe fitters. Breaking pipes from cannonfire isn't a 
                death sentence if you have a couple people on board who can repair and replace pipes fast enough.
              </p>
            </SmallLoreBody>
          </BigLoreContainer>
          <div>
            <SmallLoreHeader>
              The Under Guild
            </SmallLoreHeader>
            <SmallLoreBody>
              Secret organizations, seldom in collaboration with one anther, who commission archeologists, scientists, librarians and 
              others to discover lost histories of Zehiras, the world under the mist, and to uncover new secrets. Their goal is 
              typically twofold: with the loss of most knowledge, their thirst to know more knows no end, and to keep any valuable 
              information and discoveries out of the hands of the Allied Islands Trading Union.
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Myths and Legends
            </SmallLoreHeader>
            <SmallLoreBody>
              Old sailors tales. Most common folk don't believe in any of them, but sailors have seen things that they could never
              convince others of. The most common myths are Sirens, Sky Wales, Wizards, The Fountain of Youth, The Winged, Mad
              Ravengers, and the Far Lands.
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Heart Rings
            </SmallLoreHeader>
            <SmallLoreBody>
              <p>
                Some settlements don't have enough flat land available to harbor multiple ships, so vessles make port on cliff sides. 
                This can be accomplished because upon constructing the ship, large steel rings are attached around the keel of the ship, 
                with chains connecting them to corresponding rings above deck. The rings above deck are standard width so that any ship 
                ought to be able to dock at any settlement.
              </p>
              <p>
                This also enables ships to cool down their furnaces completely (which is usually required by ordinance) upon 
                making port, but comes at the cost of time when making birth, since a ship has to heat their furnaces hot enough to 
                achieve initial lift at such an altitude. 
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Miscellaneous Technology
            </SmallLoreHeader>
            <SmallLoreBody>
              <p>
                While most people weild a cutlass or other form of longblade, some prefer the security of the range that flintlocks 
                and muskets provide, though they take time to reload.
              </p>
              <p>
                Grappling hooks and harnesses are quite common among aerial vessels, as they've saved more than their fair share of lives.
              </p>
              <p>
                Other small pieces of technology and invention are as colorful and sundry as the number and types of crews sailing the skies.
                Each ship and settlement all have their own unique twists on the different inventions that people have created to survive in
                the dangerous skies, hills, and mountains of Dagaroth.
              </p>
            </SmallLoreBody>
          </div>
        </SmallLoreContainer>
        <SmallWhiteSpaceBuffer />



        <Header>
          The Crew
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
                world building to come will be done playing crew aboard this ship).
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Captain Curtis Vale
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Captain and Ring Master
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <p>
                An extremely charismatic bloke. Has talked his way out of more than one tussle with the Trading Union. Typically is the
                one to coordinate smuggling operations.
              </p>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Rick Chival
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Farmer and Canoneer
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <p>
                A true gentleman. This former farmer's visage portrays equal parts unassuming and clueless, which hides extremely well 
                his capability and resolve. His former training, which he speaks little of, makes him the perfect agent to take point 
                on smuggling ventures.
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
          <div>
            <SmallLoreHeader>
              Everly Clark
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Engineer
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Dustin Thuswindburn
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Deck Hand
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Micah Perrier
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Deck Hand
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
          <div>
            <SmallLoreHeader>
              Gomez Carmichael
            </SmallLoreHeader>
            <SmallLoreSubHeader>
              Beast Tamer and Quartermaster
            </SmallLoreSubHeader>
            <SmallLoreBody>
              <CenterWrapper>
                (Description coming soon)
              </CenterWrapper>
            </SmallLoreBody>
          </div>
        </SmallLoreContainer>
        <SmallWhiteSpaceBuffer />

        
        <Accordion
          contents={(
            <Fragment>
              <SmallWhiteSpaceBuffer />
              <SubHeader>
                Additional Vehicle Actions
              </SubHeader>
              <Table
                columns={[{title: 'Action'}, {title: 'Skill and Difficulty', width: 200}, {title: 'Results'}]}
                rows={additionalVehicleActions}
              />
              <SmallWhiteSpaceBuffer />
              <SubHeader>
                Jockey Actions
              </SubHeader>
              <Table
                columns={[{title: 'Action'}, {title: 'Skill and Difficulty', width: 200}, {title: 'Results'}]}
                rows={jockeyActions}
              />
              <SmallWhiteSpaceBuffer />
              <SubHeader>
                Vehicle Critical Hits
              </SubHeader>
              <Table
                columns={[{title: 'd100', width: 75}, {title: 'Severity', width: 175}, {title: 'Result'}]}
                rows={criticalHitsOnShip}
              />
            </Fragment>
          )}
        >
          <LinkHeader color={orange}>
            Toggle Genesys Combat Tables {!wide && '(not optimized for mobile)'}
          </LinkHeader>
        </Accordion>
        <SmallWhiteSpaceBuffer />
        <Footer>
          Copyright 2019 James Holbert · All images are public domain
        </Footer>
      </Page>
    </PageWrapper>
  );
}

export default App;


