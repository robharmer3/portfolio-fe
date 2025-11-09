export default function Bio() {
  return (
    <div>
      <h2>Bio</h2>
      <div className="bio">
        <div className="bio-list">
          <img
            src="/src/assets/profile-pic.jpg"
            alt=""
            className="profile-pic"
          />
        </div>
        <div className="bio-list">
          <h3>Intro...</h3>
          <p>
            Hello, I'm Rob and I am a Software Developer in search of my first
            software development role.
            <br />I have recently graduated from Northcoders' JavaScript
            bootcamp.
            <br />
            While on the bootcamp I gain experience with JavaScript, Node.js and
            React.
            <br />
            As well as practiced Test-Driven Development, Agile methodology, and
            pair programming.
            <br />I hold a Mechanical Engineering degree and several years of
            experience{" "}
          </p>
        </div>
        <div className="bio-list">
          <h3>Previosuly...</h3>
          <p>
            Before switching careers to Software Development, I was Project and
            Desgin Engineer <br />
            with a degree in Mechanical Engineering from the University of
            Bolton.
            <br />I also have several years in a wide range of industries, most
            recently the automotive sector.
          </p>
        </div>
        <div className="bio-list">
          <h3>Why Software Development?</h3>
          <ul>
            <li>because I enjoy solving problems in a creative ways.</li>
            <li>because I want to feel like I'm making a real difference.</li>
            <li>
              because I want to work with cutting-edge technologies and broaden
              my knowledge of the wider tech industry.
            </li>
            <li>because I want to be the best!</li>
          </ul>
        </div>
        <div className="bio-list">
          <h3>Fun Facts...</h3>
          <ul>
            <li>
              💏 Husband to my beautiful wife. Father to my amazing daughter.
            </li>
            <li>😸 Slightly cat mad! I have 3!!!</li>
            <li>🏑Keen hockey player.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
