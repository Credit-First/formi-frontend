import { circleProgresslist_temp } from '@/constants'

export default async function getCircleProgress() {
  let circleProgressList = []
  try {
    const res_circleProgress = await fetch(
      `http://localhost:3000/api/getCircleProgressList`
    )
    circleProgressList = await res_circleProgress.json()
  } catch (error) {
    circleProgressList = circleProgresslist_temp
  }
  return circleProgressList
}
