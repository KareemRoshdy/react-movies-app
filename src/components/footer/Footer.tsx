import "./footer.css";
import FooterBrand from "./FooterBrand";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "MoviesApp",
      links: ["about us", "my profile", "pricing plans", "contacts"],
    },
    {
      id: 2,
      title: "Browser",
      links: ["live TV", "live news", "live sports", "streaming library"],
    },
    {
      id: 3,
      title: "Categories",
      links: ["TV shows", "movies", "kids", "collections"],
    },
    {
      id: 4,
      title: "Help",
      links: [
        "account & billing",
        "plans & pricing",
        "supported devices",
        "accessibility",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container flex space-between gap-25">
        <FooterBrand />

        <div className="footer-links">
          {footerLinks.map((l) => (
            <FooterLinks key={l.id} title={l.title} links={l.links} />
          ))}
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
