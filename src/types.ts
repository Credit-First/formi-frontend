import { Dispatch, ReactNode } from 'react'
export interface LayoutProps {
  children: React.ReactNode
}

export interface SidebarProps {
  selectedItem: string
  setSelectedItem: Dispatch<string>
}

export interface NavbarProps {
  selectedItem: string
}

export interface BackDropProps {
  onClick: () => void
  children: ReactNode
}

export interface DropdownListProps {
  options: string[]
}

export interface SearchInputProps {
  className: string
}

export interface CircleProgressProps {
  title: string
  color: string
  percent: number
  amount: number
  content: string
}
export interface CircleProgressBarProps {
  strokeWidth: number
  sqSize: number
  percentage: number
  strokeColor: string
}

export interface performanceListProps {
  avatar: string
  name: string
  role: string
  ranking: number
}
export interface circleProgresslistProps {
  title: string
  color: string
  percent: number
  amount: number
  content: string
}
export interface barProgressProps {
  label: string
  value_1: number
  value_2: number
}

export interface lineProgressProps {
  label: string
  value: number
}

export interface HomeProps {
  performanceList: performanceListProps[]
  circleProgressList: circleProgresslistProps[]
  barProgressList: barProgressProps[]
  lineProgressList: lineProgressProps[]
}

export interface PerformanceProps {
  data: performanceListProps[]
}

export interface BarProgressProps {
  data: barProgressProps[]
}
export interface LineProgressProps {
  data: lineProgressProps[]
}
