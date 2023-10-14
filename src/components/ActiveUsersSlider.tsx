import { useState, type ChangeEvent } from 'react'

interface ActiveUsersSliderProps {
  config: {
    min: number | string
    max: number | string
    step: number | string
  }
}

export default function ActiveUsersSlider({ config }: ActiveUsersSliderProps) {
  const [currentValue, setCurrentValue] = useState(config.min)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setCurrentValue(value)
  }

  return (
    <div>
      <label className="text-neutral-100">
        <input
          onChange={handleChange}
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={currentValue}
        />
        {currentValue}
      </label>

      <div className="text-neutral-100">
        <small>{config.min}</small>
        <small>{config.max}</small>
      </div>
    </div>
  )
}
