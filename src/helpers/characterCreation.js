export const archetypes = [
  {
    title: 'Average Human',
    brawn: 2,
    agility: 2,
    intellect: 2,
    cunning: 2,
    willpower: 2,
    presence: 2,
    wound: 10,
    strain: 10,
    exp: 110
  },
  {
    title: 'Laborer',
    brawn: 3,
    agility: 2,
    intellect: 2,
    cunning: 2,
    willpower: 1,
    presence: 2,
    wound: 12,
    strain: 8,
    exp: 100
  },
  {
    title: 'Intellectual',
    brawn: 2,
    agility: 1,
    intellect: 3,
    cunning: 2,
    willpower: 2,
    presence: 2,
    wound: 8,
    strain: 12,
    exp: 100
  },
  {
    title: 'Aristocrat',
    brawn: 1,
    agility: 2,
    intellect: 2,
    cunning: 2,
    willpower: 2,
    presence: 3,
    wound: 10,
    strain: 10,
    exp: 100
  },
]

export const origins = [
  {
    title: 'Farmer/Miner',
    description: 'From humble beginnings, these adventurers usually have more knowledge and stories than they care to share with those who haven\'nt earned a few scars. Sidirume harvesters are also regarded as farmers.',
    skills: 'Athletics, Discipline, Melee, Mechanics, Operating, Resiliance, Riding, Survival'
  },
  {
    title: 'Sailor/Pirate',
    description: 'For when your character has already experienced a life in the skies. Perhaps they grew up on a ship, or joined early in life. One way or other they\'re ready for anything the sky can throw at them.',
    skills: 'Athletics, Cool, Coordination, Navigation, Melee, Ranged (light), Gunnery'
  },
  {
    title: 'Soldier',
    description: 'Private security, militia, or some kind of officer in the Allied Islands Tranding Union, these adventurers are usually disenchanted and have plenty they\'d like to forget about, and even less they like to share.',
    skills: 'Athletics, Melee, Ranged (light), Ranged (heavy), Gunnery, Discipline, Leadership, Survival'
  },
  {
    title: 'Bounty Hunter',
    description: 'Not a common vocation, these adventurers prefer to travel around tracking people for various reasons. Those who hunt for the AITU are the most compensated, and the most hated.',
    skills: 'Athletics, Cool, Coordination, Melee, Ranged (light), Perception, Navigation, Vigilance'
  },
  {
    title: 'Underguild Member',
    description: 'Typically something of scientists, these individuals study and experiment across the explorable world, and when possible, the unexplorable. Whether discovering them or keeping them from those who would abuse them is more important is varied by person.',
    skills: 'Piloting, Medicine, Cool, Streetwise, Skullduggery, Deception, Navigation, Knowledge (forbidden)'
  },
  {
    title: 'Acolyte',
    description: 'Whether a missionary for the Church Proper, or a runaway from the Church Ascended, these individuals find themselves learning to sail all the while keeping the crew as healthy as possible. Checkered pasts are not uncommon among clergy.',
    skills: 'Athletics, Cool, Charm, Discipline, Perception, Brawl, Negotiation, Streewise'
  },
]

export const originOrRole = [
  {
    title: 'Dragon Jockey',
    description: 'There are many reasons to ride the giant birds, political, archeological, racing, etc, but regardless of the reason, nothing beats the thrill of soaring through the sky on the back of a faithful ally.',
    skills: 'Athletics, Coordination, Medicine, Perception, Piloting, Riding, Stealth, Vigilance',
    bonus: 'Free rank in Riding'
  },
  {
    title: 'Engineer/Shipwright',
    description: 'Whether you\'re building a ship or assembling the furnaces and pipes, these adventurers either know the trade or can seemingly whisper to ships. Without them, there wouldn\'t be sky ships at all.',
    skills: 'Athletics, Leadship, Mechanics, Melee, Operating, Perception, Resiliance, Riding',
    bonus: 'Free rank in Mechanics'
  },
  {
    title: 'Doctor',
    description: 'Trained professionals or just the designated medic on the vessel, these are hearty individuals who don\'t mind the sight of blood.',
    skills: 'Discipline, Cool, Discipline, Knowledge (science), Medicine, Perception, Survival, Vigilance',
    bonus: 'Free rank in Medicine'
  },
]

export const roles = [
  {
    title: 'Captain',
    bonus: 'Free rank in Leadership'
  },
  {
    title: 'First Mate',
    bonus: 'Free rank in Coercion'
  },
  {
    title: 'Helmsman',
    bonus: 'Free rank in Piloting'
  },
  {
    title: 'Cook',
    bonus: 'Free rank in Charm'
  },
  {
    title: 'Deck hand',
    bonus: 'Free rank in Brawl'
  },
  {
    title: 'Canoneer',
    bonus: 'Free rank in Gunnery'
  },
  {
    title: 'Navigator',
    bonus: 'Free rank in Navigation'
  },
  {
    title: 'Quartermaster',
    bonus: 'Free rank in Negotiation'
  },
]