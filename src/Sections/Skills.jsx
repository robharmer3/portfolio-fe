import SingleSkills from "./SingleSkills";

export default function Skills() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const listItems = people.map((person) => (
    <li>
      <SingleSkills person={person} />
    </li>
  ));

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
