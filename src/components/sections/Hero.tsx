import Link from "next/link";
import Image from "next/image";
import heroLeft from "./images/image3.jpg";
import heroMain from "./images/image1.avif";
import heroRight from "./images/image2.jpg";

const stackIcons = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "MongoDB", slug: "mongodb" },
];

export default function Hero() {
  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <div className="eyebrow">Trusted by growing teams worldwide</div>
          <h1 className="hero-title">
            <span className="line">Software that</span>
            <span className="line">grows with your</span>
            <span className="line">business.</span>
          </h1>
          <p className="hero-sub">
            We design and build custom software, AI products, and SaaS platforms engineered for performance and
            built to last.
          </p>
          <div className="hero-actions">
            <Link href="/contact">
              <button className="btn-primary">Book a Free Consultation</button>
            </Link>
            <Link href="/portfolio">
              <button className="btn-secondary">Explore Our Work</button>
            </Link>
          </div>
          <div className="hero-trust">
            <div className="stack-icons">
              {stackIcons.map((icon) => (
                <span key={icon.slug}>
                  <img src={`https://cdn.simpleicons.org/${icon.slug}/17143C`} alt={icon.name} />
                </span>
              ))}
            </div>
            <p>40+ products shipped for clients across 9 countries</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>
          <div className="float-card card-left">
            <Image src={heroLeft} alt="Team standing together" />
          </div>
          <div className="float-card card-right">
            <Image src={heroRight} alt="Colleagues discussing a project" />
          </div>
          <div className="float-card card-main">
            <Image src={heroMain} alt="Developers collaborating on laptops" priority />
          </div>
        </div>
      </section>
    </div>
  );
}