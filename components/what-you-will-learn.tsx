export default function WhatYouWillLearn() {
  const learningPoints = [
    "Buy Bitcoin and other cryptocurrencies on Coinbase",
    "Understand how to use the Coinbase App",
    "Earn free crypto with Coinbase Earn™",
    "Set up a secure crypto wallet",
    "Transfer cryptocurrencies between wallets",
    "Understand the basics of blockchain technology",
    "Learn about cryptocurrency market trends",
    "Protect your digital assets from scams",
  ]

  return (
    <section className="mb-8 border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
      <div className="grid md:grid-cols-2 gap-2">
        {learningPoints.map((point, index) => (
          <div key={index} className="flex">
            <div className="mr-2 mt-1 text-gray-700">✓</div>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

