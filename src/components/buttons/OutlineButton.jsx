import './outlineButton.scss';

export const OutlineButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='outlineButton'>
      {children}
    </button>
  );
};