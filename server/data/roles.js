const roleData = [
  {
    id: 1,
    name: 'Merlin',
    slug: 'merlin',
    allegiance: 'Good',
    roleType: 'Core',
    cardText: 'Knows evil, must remain hidden',
    description: 'Merlin knows the Evil players, except Mordred. Merlin must guide the Good team toward successful quests without revealing too much, because Evil can still win by identifying Merlin at the end of the game.',
    image: '/images/merlin.png'
  },
  {
    id: 2,
    name: 'Loyal Servant of Arthur',
    slug: 'loyal-servant-of-arthur',
    allegiance: 'Good',
    roleType: 'Core',
    cardText: 'Loyal Servant of Arthur',
    description: 'The standard Good role. Loyal Servants have no special information and must determine who can be trusted through discussion, voting, and quest results. Good players must play a Success card when sent on a quest.',
    image: '/images/loyal-servant.png'
  },
  {
    id: 3,
    name: 'Percival',
    slug: 'percival',
    allegiance: 'Good',
    roleType: 'Optional',
    cardText: 'Knows Merlin',
    description: 'Percival is shown Merlin at the beginning of the game. If Morgana is also in play, Percival sees both Merlin and Morgana but is not told which one is the real Merlin.',
    image: '/images/percival.png'
  },
  {
    id: 4,
    name: 'Assassin',
    slug: 'assassin',
    allegiance: 'Evil',
    roleType: 'Core',
    cardText: 'Minion of Mordred',
    description: 'The Assassin plays as a member of the Evil team. If Good completes three quests, the Assassin gets one final opportunity to win for Evil by correctly identifying Merlin.',
    image: '/images/assassin.png'
  },
  {
    id: 5,
    name: 'Minion of Mordred',
    slug: 'minion-of-mordred',
    allegiance: 'Evil',
    roleType: 'Core',
    cardText: 'Minion of Mordred',
    description: 'The standard Evil role. Minions know the other visible Evil players and attempt to sabotage quests while convincing the Good team that they can be trusted.',
    image: '/images/minion-of-mordred.png'
  },
  {
    id: 6,
    name: 'Morgana',
    slug: 'morgana',
    allegiance: 'Evil',
    roleType: 'Optional',
    cardText: 'Appears as Merlin',
    description: 'Morgana appears alongside Merlin when Percival receives information at the beginning of the game. Percival therefore sees two possible Merlins and must determine which one is genuine.',
    image: '/images/morgana.png'
  },
  {
    id: 7,
    name: 'Mordred',
    slug: 'mordred',
    allegiance: 'Evil',
    roleType: 'Optional',
    cardText: 'Unknown to Merlin',
    description: 'Mordred is hidden from Merlin at the beginning of the game. This prevents Merlin from knowing every Evil player and makes the game more difficult for Good.',
    image: '/images/mordred.png'
  },
  {
    id: 8,
    name: 'Oberon',
    slug: 'oberon',
    allegiance: 'Evil',
    roleType: 'Optional',
    cardText: 'Unknown to Evil',
    description: 'Oberon is Evil but does not reveal himself to the other Evil players and does not learn who they are. This prevents the Evil team from fully coordinating with him.',
    image: '/images/oberon.png'
  }
]

export default roleData