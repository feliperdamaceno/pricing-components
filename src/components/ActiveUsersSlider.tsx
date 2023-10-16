import type { ChangeEvent, MouseEvent } from 'react'
import { useState } from 'react'

interface ActiveUsersSliderProps {
  config: {
    min: number | string
    max: number | string
    step: number | string
  }
}

export default function ActiveUsersSlider({ config }: ActiveUsersSliderProps) {
  const [currentValue, setCurrentValue] = useState(config.min)
  const [tooltipValue, setTooltipValue] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setCurrentValue(value)
  }

  const handleHover = (event: MouseEvent<HTMLInputElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const position = event.clientX - rect.left
    const sliderWidth = rect.width
    const value = (position / sliderWidth) * 100
    setTooltipValue(Math.round(value))
  }

  return (
    <div className="active_users_slider">
      <div>
        <input
          onMouseMove={handleHover}
          className="text-neutral-100"
          onChange={handleChange}
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={currentValue}
        />

        <span
          style={{ left: `calc(${tooltipValue}% - 35px)` }}
          className="tooltip"
        >
          {currentValue}
        </span>
      </div>

      <div className="minmax text-neutral-100">
        <small>{config.min.toLocaleString('en')}</small>
        <small>{config.max.toLocaleString('en')}</small>
      </div>
    </div>
  )
}
