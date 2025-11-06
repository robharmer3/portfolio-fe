import SingleProject from "./SingleProject";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const listItems = people.map((person) => (
  <li>
    <SingleProject person={person} />
  </li>
));

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
