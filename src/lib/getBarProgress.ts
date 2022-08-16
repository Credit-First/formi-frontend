import { barProgressList_temp } from '@/constants'

export default async function getBarProgress() {
  let barProgressList = []
  try {
    const res_barProgress = await fetch(
      `http://localhost:3000/api/getBarProgressList`
    )
    barProgressList = await res_barProgress.json()
  } catch (error) {
    barProgressList = barProgressList_temp
  }
  return barProgressList
}
