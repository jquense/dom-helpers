import getWindow from './isWindow'
import offset from './offset'

export default function height(node: HTMLElement, client?: boolean) {
  let win = getWindow(node)
  return win
    ? win.innerHeight
    : client
    ? node.clientHeight
    : offset(node).height
}
