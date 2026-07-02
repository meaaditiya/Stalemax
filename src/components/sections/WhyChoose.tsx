import { whyChoose } from "@/data/whyChoose";

export default function WhyChoose() {
  const doubled = [...whyChoose, ...whyChoose];

  return (
    <>
      <section className="why-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Why Stalemax</span>
            <h2 className="section-title">
              Built for teams that <em>don&apos;t compromise.</em>
            </h2>
            <p className="section-sub">
              Every engagement is held to the same standard: clean code, honest timelines, and software that lasts.
            </p>
          </div>
        </div>
      </section>

      <div className="why-slider-outer">
        <div className="why-slider">
          {doubled.map((item, i) => (
            <div className="why-card" key={`${item.id}-${i}`}>
              <img src={item.image} alt={item.title} />
              <div className="why-card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
