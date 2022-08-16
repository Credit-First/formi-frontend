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
