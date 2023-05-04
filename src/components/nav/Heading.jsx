import './heading.scss';
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = ({resume}) => {
  return (
    <header className='heading'>
      <MyLinks />
      <OutlineButton onClick={() => window.open(resume)}>
        My resume
      </OutlineButton>
    </header>
  );
};