
export const onScroll = (event, pos, delta, min, max, factor = 1) => {
  let newPos = pos + delta * factor
  if (newPos < min) newPos = min
  if (newPos > max) newPos = max
  return newPos
}
