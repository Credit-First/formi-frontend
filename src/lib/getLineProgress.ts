import { lineProgressList_temp } from '@/constants'

export default async function getLineProgress() {
  let lineProgressList = []
  try {
    const res_lineProgress = await fetch(
      `http://localhost:3000/api/getLineProgressList`
    )
    lineProgressList = await res_lineProgress.json()
  } catch (error) {
    lineProgressList = lineProgressList_temp
  }
  return lineProgressList
}
