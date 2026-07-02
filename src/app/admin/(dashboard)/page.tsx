import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import Career from "@/models/Career";
import { Mail, Briefcase, Inbox } from "lucide-react";

export default async function AdminDashboardPage() {
  await connectDB();
  const [totalContacts, newContacts, totalCareers, newCareers] = await Promise.all([
    Contact.countDocuments(),
    Contact.countDocuments({ status: "new" }),
    Career.countDocuments(),
    Career.countDocuments({ status: "new" }),
  ]);

  const cards = [
    { label: "Total Enquiries", value: totalContacts, icon: Mail },
    { label: "New Enquiries", value: newContacts, icon: Inbox },
    { label: "Total Applications", value: totalCareers, icon: Briefcase },
    { label: "New Applications", value: newCareers, icon: Inbox },
  ];

  return (
    <div>
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "26px", color: "var(--navy)", marginBottom: "24px" }}>
        Dashboard
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "18px" }}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="plain-card">
              <Icon size={20} color="#17143C" />
              <p style={{ fontSize: "28px", fontWeight: 800, color: "var(--navy)", marginTop: "12px" }}>
                {card.value}
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>{card.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
