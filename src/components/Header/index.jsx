import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
const code = `
const developer = { 
firstName:"Rahul", 
lastName: "Khandelwal"
aka: "Mr Adinuba",
hobby: repeat = () =>{ 
  //eat();
  //sleep();
  //code();
  //repaet();
  }
}
`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src="https://avatars.githubusercontent.com/u/60139552?v=4" className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">I do</p>
            <Facts />
            <SocialHandles/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
