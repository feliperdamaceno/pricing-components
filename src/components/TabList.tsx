import { useState } from 'react'

interface TabListProps {
  options: string[]
  onClick: (...args: unknown[]) => unknown
}

export default function TabList({ options, onClick }: TabListProps) {
  const [active, setActive] = useState(0)

  const handleClick = (index: number) => {
    setActive(index)
    onClick()
  }

  return (
    <div className="tab_list">
      {options.map((tab, index) => (
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
