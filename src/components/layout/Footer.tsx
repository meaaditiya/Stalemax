import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import NewsletterForm from "@/components/forms/NewsletterForm";
import AppLogo from "@/components/sections/images/appicon.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src={AppLogo.src} alt={`${siteConfig.shortName} logo`} className="logo-img" />
              {siteConfig.shortName}
            </Link>
            <p>{siteConfig.description}</p>
            <div style={{ marginTop: "18px" }}>
              <NewsletterForm />
            </div>
          </div>

          <div className="footer-contact">
            <h5>Company</h5>
            <p>
              <Link href="/#services">Services</Link>
              <br />
              <Link href="/#products">Products</Link>
              <br />
              <Link href="/portfolio">Portfolio</Link>
              <br />
              <Link href="/careers">Careers</Link>
              <br />
              <Link href="/blog">Blog</Link>
            </p>
          </div>

          <div className="footer-contact">
            <h5>Resources</h5>
            <p>
              <Link href="/faq">FAQ</Link>
              <br />
              <Link href="/contact">Contact</Link>
              <br />
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="footer-contact">
            <h5>Contact</h5>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
            </p>
          </div>

          <div className="footer-contact">
            <h5>Address</h5>
            <p>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.line3}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>Made with ❤ by {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}