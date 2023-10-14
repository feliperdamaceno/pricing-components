// Components
import { Card } from '.'

export default function PricingCard() {
  return (
    <Card
      variation="gradient"
      render={(style) => (
        <div className={`flow ${style}`}>
          <h2>Free plan</h2>

          <div>
            <p>
              Get a free plan with up to 5,000 active users and unlimited
              logins.
            </p>
            <p>No credit card required.</p>
          </div>

          <button>Start for free</button>
        </div>
      )}
    />
  )
}
