export const gameTileSize = 80

export function pos(position: number, centered: boolean | undefined = true) {
  const tilePos =
    position * gameTileSize + (centered === true ? gameTileSize / 2 : 0)

  return tilePos
}
