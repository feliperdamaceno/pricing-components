import { PricingCard, TabList } from './components'

export default function App() {
  return (
    <main>
      <PricingCard />

      <div className="flow">
        <h3 className="text-center text-neutral-100">What is your use case?</h3>
        <TabList
          options={['B2C', 'B2B', 'B2E']}
          onClick={() => console.log('🐙')}
        />
      </div>
    </main>
  )
}
