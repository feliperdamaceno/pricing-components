import { PricingCard, TabList, ActiveUsersSlider } from './components'

export default function App() {
  return (
    <main>
      <PricingCard />

      <div className="flow">
        <h3 className="text-center text-neutral-100">What is your use case?</h3>
        <TabList
          tabs={['B2C', 'B2B', 'B2E']}
          onClick={() => console.log('🐙')}
        />
      </div>

      <div className="flow">
        <h3 className="text-center text-neutral-100">How many active users?</h3>
        <ActiveUsersSlider config={{ min: 1000, max: 10000, step: 100 }} />
      </div>
    </main>
  )
}
