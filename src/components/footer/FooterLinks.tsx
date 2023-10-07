interface Props {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: Props) => {
  return (
    <ul>
      <h4 className="link-heading">{title}</h4>
      {links.map((link) => (
        <li key={link} className="link-item">
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
