const items = [
  "Coaching Mgmt. Systems",
  "Furniture Retail Platforms",
  "SaaS Dashboards",
  "Enterprise ERP",
  "AI Integrations",
  "Cloud Infrastructure",
  "Payment Systems",
];

export default function LogosMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="logos">
      <div className="logos-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
