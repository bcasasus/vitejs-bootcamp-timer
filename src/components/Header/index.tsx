import Title from '../Title';
import './styles.css';

interface HeaderStructure {
  remainingDays: number;
  isCompleted: boolean;
  className?: string;
}

const Header = ({
  remainingDays,
  isCompleted,
}: HeaderStructure): JSX.Element => {
  return (
    <>
      {isCompleted ? (
        <Title>Congratulations! You reach the end of the BOOTCAMP!</Title>
      ) : (
        <Title>
          Bootcamp ends in{' '}
          <span className="highlight">
            <span className="highlight__text">{remainingDays}</span>
            {remainingDays === 1 ? 'day' : 'days'}
          </span>
        </Title>
      )}
    </>
  );
};

export default Header;
