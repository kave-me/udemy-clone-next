export default function Requirements() {
  const requirements = [
    "No prior cryptocurrency or blockchain knowledge required",
    "A smartphone or computer with internet access",
    "Valid email address for Coinbase registration",
    "Government-issued ID for account verification (if you plan to buy crypto)",
  ]

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Requirements</h2>
      <ul className="list-disc pl-5 space-y-2">
        {requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
    </section>
  )
}

