import React, { Fragment } from 'react'

import { Ability, Challenge, Setback, Boost, Difficulty, Proficiency } from '../components/dice'
import { Success, Failure, Threat, Triumph, Advantage, Despair } from '../components/dice'

export const additionalVehicleActions = [
  {
    values: [
      'Plot Course', 
      <Fragment>Average (<Difficulty /><Difficulty />) Piloting or Hard (<Difficulty /><Difficulty /><Difficulty />) Perception</Fragment>, 
      <Fragment>The crew member studies the terrain ahead and plots a course that should take the vehicle safely through it. On a successful check, each uncancelled <Success /> reduces the <Setback /> suffered for difficult terrain by one.</Fragment>
      ]
    },
  {
    values: [
      'Copilot', 
      <Fragment>Average (<Difficulty /> <Difficulty />) Engineering or Hard (<Difficulty /><Difficulty /><Difficulty />) Operating check</Fragment>, 
      <Fragment>The engineering crew member coordinates to the helmsman from below decks, managing pressure and temperature of sidirume systems to give the helmsman an edge in maneuvering the ship. On a successful check, each uncancelled <Success /> downgrades the difficulty of the helmsman's next Driving, Piloting, or Operating check once.</Fragment>
      ]
    },
  {
    values: [
      'Boost Defenses', 
      <Fragment>Hard (<Difficulty /><Difficulty /><Difficulty />) Mechanics check</Fragment>, 
      <Fragment>The crew member reroutes power from other systems to boost the defensive systems of a vehicle. This only works if the vehicle already has a defense of 1 or greater. On a successful check, the vehicle suffers 1 system strain and increases the defense of one defense zone by one until the beginning of the character’s next turn. Each additional <Success /> increases the duration by one round.</Fragment>
      ]
    },
  {
    values: [
      'Manual Repairs', 
      <Fragment>Hard  (<Difficulty /><Difficulty /><Difficulty />) Athletics check</Fragment>, 
      <Fragment>In some cases, repairs can be as simple as welding a sturdy metal plate over a damaged system. If the character has the proper tools for the job, they can attempt to use the Damage Control action with Athletics rather than Mechanics. If successful, the character removes one point of hull trauma from the vehicle, plus one additional point for each additional <Success /><Success />. This follows the limitations of the Damage Control action, and thus may only be attempted once per encounter. </Fragment>
      ]
    },
  {
    values: [
      'Fire Discipline', 
      <Fragment>Hard (<Difficulty /><Difficulty /><Difficulty />) Leadership  or Discipline check</Fragment>, 
      <Fragment>The character forgoes fighting to analyze the opponents’ tactics and direct their comrades in achieving greater accuracy with weapons fire. If the check is successful, the next crew member firing a weapon on the vehicle adds <Boost /> to their check (plus an additional crew member for every additional <Success /><Success />). The character may also spend <Advantage /><Advantage /><Advantage /> to allow every hit from shipboard weapons to inflict 1 system strain on their target as well as regular damage until the beginning of the character’s next turn, as the carefully timed shots pummel shields and overload systems.</Fragment>
      ]
    },
]

export const jockeyActions = [
  {
    values: [
      'Dragon Intercept',
      <Fragment>Hard (<Difficulty /><Difficulty /><Difficulty />) Riding check or Average (<Difficulty /><Difficulty />) Vigilance check</Fragment>,
      <Fragment>The character tracks incoming attacks from enemy Dragon Jockeys and one way or other distracts or hinders their efforts to sabotage your ship. If the check is successful, any actions against their vehicle from a Dragon upgrade their difficulty once (plus an additional upgrade for every additional <Success /><Success />) until the start of the character's next turn.</Fragment>
    ]
  },
  {
    values: [
      'Smoke Screen',
      <Fragment>Average (<Difficulty /><Difficulty />) Nautical Warfare check or Hard (<Difficulty /><Difficulty /><Difficulty />) Deception check</Fragment>,
      <Fragment>The character uses some means to distract or otherwise prevent the opposing ship from having a clean shot on your ship. On a successful check, upgrade the difficulty of any combat check performed by the targeted side of the sabotaged ship toward a target of your choice. The difficulty increases by one for each additional <Success /><Success />, and provides cover for an extra target for each <Advantage /> spent.</Fragment>
    ]
  },
  {
    values: [
      'Sabotage Enemy’s Systems',
      <Fragment>Hard (<Difficulty /><Difficulty /><Difficulty />) Skullduggery or Mechanics check</Fragment>,
      <Fragment>The character uses some means to attempt to disrupt the outward systems of an enemy vehicle. If successful, the character compromises the defenses of the target vehicle for one round per <Success /> (see the Vehicle Components sidebar, on page 221). A <Triumph /> may be spent to compromise one enemy weapon of the character’s choice, and <Advantage /><Advantage /> may be spent to inflict 1 system strain on the target vehicle. </Fragment>
    ]
  },
  {
    values: [
      'Scapegoat',
      <Fragment>Average (<Difficulty /><Difficulty /> Riding check</Fragment>,
      <Fragment>The character uses a large vehicle, land-mass, or other obstruction to avoid being detected by the enemy. On a successful check, either nullify the effects of an enemy's "Gain the Advantage", or add <Setback /> to all actions and attacks against the character until the character's next turn. For each <Success /><Success /> beyond the first, add <Setback /> to checks and attacks made against them. Each <Advantage /><Advantage /> may be spent to downgrade the difficulty of Jockey Actions for their next turn by 1.</Fragment>
    ]
  },
  {
    values: [
      'Scout the Enemy', 
      <Fragment>Hard (<Difficulty /><Difficulty /><Difficulty />) Perception check</Fragment>, 
      <Fragment>The character uses their unique position to scout the enemy. If successful, the character learns what weapons the targeted vehicle has, its modifications, and rough estimates on system strain and hull trauma thresholds. The character can also spend <Advantage /><Advantage /> to discern its current system strain and hull trauma levels.</Fragment>
      ]
  },  
]

export const criticalHitsOnShip = [
  {
    values:[
      '01–18',
      <Fragment>Easy (<Difficulty />)</Fragment>,
      <Fragment>Rattled: The vehicle suffers 3 system strain, and its pilot and each occupant suffer 3 strain.</Fragment>
    ]
  },{
    values:[
      '19–36',
      <Fragment>Easy (<Difficulty />)</Fragment>,
      <Fragment>Shrapnel Spray: Chunks of metal or wood are hurled at the occupants at deadly velocity. The pilot and occupants must each make a Hard (<Difficulty /><Difficulty /><Difficulty />) Resilience or Vigilance check or suffer 1 wound, plus 1 additional wound per <Failure /> on the check; the GM may spend <Threat /><Threat /><Threat /> or <Despair /> from this check to inflict a Critical Injury on the character.</Fragment>
    ]
  },{
    values:[
      '37–54',
      <Fragment>Easy (<Difficulty />)</Fragment>,
      <Fragment>Hull Damaged: The vehicle’s hull is compromised (see Vehicle Components on page 221).</Fragment>
    ]
  },{
    values:[
      '55–63',
      <Fragment>Average (<Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Rigging Damaged: The vehicle’s navigation is compromised (see Vehicle Components, on page 221).</Fragment>
    ]
  },{
    values:[
      '64–72',
      <Fragment>Average (<Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Windless Sails Damaged: The vehicle’s propulsion is compromised (see Vehicle Components, on page 221). Replace with Windless Sails</Fragment>
    ]
  },
  {
    values:[
      '73–81',
      <Fragment>Average (<Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Repulsion Drums Damaged: The vehicle’s defenses are compromised (see Vehicle Components, on page 221).</Fragment>
    ]
  },
  {
    values:[
      '82–108',
      <Fragment>Hard  (<Difficulty /><Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Weapons Damaged: One of the vehicle’s weapons of the attacker’s choice is compromised (see Vehicle Components, on page 221).</Fragment>
    ]
  },{
    values:[
      '109–126',
      <Fragment>Hard  (<Difficulty /><Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Anti-gravity Damaged: The vehicle’s sidirume pipes are compromised, lose 1 vertical range band every turn (see Vehicle Components, on page 221).</Fragment>
    ]
  },
  {
    values:[
      '127–138',
      <Fragment>Daunting (<Difficulty /><Difficulty /><Difficulty /><Difficulty />)</Fragment>,
      <Fragment>All Systems Down: All of the vehicle’s components are compromised (see Vehicle Components, on page 221).</Fragment>
    ]
  },{
    values:[
      '139–144',
      <Fragment>Daunting (<Difficulty /><Difficulty /><Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Fire!: The vehicle catches on fire. While the vehicle is on fire, each occupant suffers damage as discussed on page 111. A fire can be put out with a Hard (<Difficulty /><Difficulty /><Difficulty />) Cool or Athletics check (or multiple checks for big vehicles).</Fragment>
    ]
  },{
    values:[
      '145–153',
      <Fragment>Daunting (<Difficulty /><Difficulty /><Difficulty /><Difficulty />)</Fragment>,
      <Fragment>Breaking Up: The vehicle begins to come apart at its seams, disintegrating around the occupants. At the end of the following round, it is completely destroyed, and the surrounding environment is littered with debris. Anyone aboard the vehicle has one round to dive for the nearest door before they are lost.</Fragment>
    ]
  },{
    values:[
      '154+',
      <Fragment>–</Fragment>,
      <Fragment>Sunk: The vehicle is completely unrepairable, descending until consumed by the unforgiving mist, not even offering the sound of a crash. All living souls receive the sailor's portion.</Fragment>
    ]
  }
]