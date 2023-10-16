import { useState } from 'react'

interface TabListProps<T> {
  tabs: string[]
  onClick: (...args: T[]) => void
}

export default function TabList<T>({ tabs, onClick }: TabListProps<T>) {
  const [active, setActive] = useState(0)

  const handleClick = (index: number) => {
    setActive(index)
    onClick()
  }

  return (
    <div className="tab_list">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={index === active ? 'active' : ''}
          onClick={() => handleClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
