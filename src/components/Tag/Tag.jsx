import "./Tag.css";

const Tag = ({ children, color }) => {
  return <span className={`tag tag--${color}`}>{children}</span>;
};

export default Tag;
