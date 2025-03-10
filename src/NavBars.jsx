export default function NavBars() {
  const ar = ["Service national", "Reserve", "Lois", "Nous Contacter"];
  return (
    <div className="nav-bars">
      {ar.map((item) => {
        return <button>{item}</button>;
      })}
    </div>
  );
}
