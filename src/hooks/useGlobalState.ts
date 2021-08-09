import { proxy, useSnapshot } from "valtio"
import type { Story } from '../types';

const globalState = proxy({
  displayedNews: [],
  allNews: [],
  story: null
} as {
  displayedNews: number[],
  allNews: number[],
  story: Story|null
})

/**
 * helper hook to make valtio usage more funny with out any macros <useProxy>
 * 
 * @returns {object[]}  [globalState, snapState]
 */
export function useGlobalState() {
  const snapState = useSnapshot(globalState)

  return [globalState, snapState]
}
