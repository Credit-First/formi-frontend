import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/outline'

export const sidebarItems = [
  { icon: HomeIcon, title: 'Dashboard' },
  { icon: UserGroupIcon, title: 'My Team' },
  { icon: BriefcaseIcon, title: 'Task' },
  { icon: CalendarIcon, title: 'Calendar' },
  { icon: ChartBarIcon, title: 'Report' },
  { icon: CogIcon, title: 'Settings' },
]

export const dropdownlist = ['Profile', 'Settings', 'Log out']

export const circleProgressList = [
  {
    title: 'Work',
    color: '#FFD339',
    percent: 50,
    amount: 75,
    content: 'Works Today',
  },
  {
    title: 'Analytics',
    color: '#FF6D39',
    percent: 25,
    amount: 310,
    content: 'Analytics Today',
  },
  {
    title: 'Statistics',
    color: '#9539FF',
    percent: 59,
    amount: 75,
    content: 'Works Today',
  },
  {
    title: 'Tasks',
    color: '#3954FF',
    percent: 75,
    amount: 15,
    content: 'Works Today',
  },
]
export const monthList = [
  '1 month',
  '2 months',
  '3 months',
  '4 months',
  '5 months',
  '6 months',
]
