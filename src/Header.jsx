import { ImHome } from "react-icons/im";
export default function Header() {
  return (
    <header>
      <div className="left-header">
        <img src="../banniere_fr.png" />
      </div>
      <div className="right-header">
        <div className="home">
          <ImHome size={50} color="white" />
        </div>

        <div className="e">AR</div>

        <div className="e">EN</div>
      </div>
    </header>
  );
}
