import { performanceList_temp } from '@/constants'

export default async function getPerformance() {
  let performanceList = []
  try {
    const res_performance = await fetch(
      `http://localhost:3000/api/getPerformanceList`
    )
    performanceList = await res_performance.json()
  } catch (error) {
    performanceList = performanceList_temp
  }
  return performanceList
}
