import './styles.css';

interface TitleStructure {
  children: string | JSX.Element;
  className?: string;
}

const Title = ({ children, className }: TitleStructure): JSX.Element => (
  <h1 className={`title ${className}`}>{children}</h1>
);

export default Title;
