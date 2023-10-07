interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return <h2 className="section-heading">{title}</h2>;
};

export default Heading;
