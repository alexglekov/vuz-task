import { Character } from '../../types/character'

export const countStats = (characters: Character[]) => {
  const stats: number[] = [0, 0, 0, 0, 0]
  characters.forEach((character) => {
    character.abilities.forEach((abilitiy, index) => {
      stats[index] =
        stats[index] + +(abilitiy.abilityScore / characters.length).toFixed(2)
    })
  })
  return stats
}
