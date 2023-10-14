interface TabListProps {
  options: string[]
  onClick: (...args: unknown[]) => unknown
}

export default function TabList({ options, onClick }: TabListProps) {
  return (
    <div className="tab_list">
      {options.map((tab) => (
        <button onClick={onClick}>{tab}</button>
      ))}
    </div>
  )
}
