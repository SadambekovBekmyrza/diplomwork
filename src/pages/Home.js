import "./pages.css";
import headerimg from ".././assets/header-img-1.jpg";
import homeimg1 from ".././assets/home-1.png";
import homeimg2 from ".././assets/home-2.png";
import homeimg3 from ".././assets/home-3.png";
import homeimg4 from ".././assets/home-4.png";

export default function Home() {
  return (
    <div className="Home">
      <section className="header">
        <h1>
          Welcome to
          <br />
          our online puzzle store
          <br />
          you can find all
          <br />
          kinds of puzzles here
        </h1>
        <img src={headerimg} alt="boy and puzzle toys" />
      </section>
      <p>
        We offer a wide variety of puzzles for all ages and skill levels. From
        jigsaw puzzles to brain teasers, we have something for everyone. Our
        collection includes classic puzzles, such as Rubik's Cube and Sudoku, as
        well as innovative and unique puzzles that will challenge and entertain
        you for hours We pride ourselves on offering high-quality puzzles from
        trusted brands, and our selection is constantly updated with the latest
        and greatest puzzle releases.
        <br />
        Whether you're looking for a solo challenge or a fun family activity,
        you'll find it here. We have puzzles in all shapes and sizes, from small
        travel puzzles to giant floor puzzles. In addition to our puzzles, we
        also offer puzzle accessories and storage solutions to help you keep
        your puzzle collection organized and in top condition. So why wait?
        Start exploring our selection today and find your next favorite puzzle!
      </p>
      <section className="goods">
        <hr />
        <h2>We sell</h2>
        <div className="cards">
          <div>
            <img src={homeimg1} alt="" />
            <h4>Rubik's Cube</h4>
          </div>
          <div>
            <img src={homeimg2} alt="" />
            <h4>Chess</h4>
          </div>
          <div>
            <img src={homeimg3} alt="" />
            <h4>Puzzle</h4>
          </div>
          <div>
            <img src={homeimg4} alt="" />
            <h4>Yo-Yo</h4>
          </div>
        </div>
        <hr />
      </section>
      <section className="learnMore">
        <h1>And much more</h1>
        <p>
          The crested honey buzzard (Pernis ptilorhynchus), also known as the
          Oriental honey buzzard, is a bird of prey in the family Accipitridae.
          Its size ranges from 57 to 60 centimetres (22 to 24 in). The name is
          derived from its diet, which consists mainly of the larvae of bees and
          wasps, extracted from honeycombs. It has several adaptations for this
          diet, including an elongated head for foraging on underground nests
          and a groove in the tongue for feeding on honey.
        </p>
        <div>
          <h3>Ajnckskcd</h3>
          <ul>
            <li>bla</li>
            <li>bla</li>
            <li>blA</li>
            <li>bla</li>
          </ul>
        </div>
        <p>
          {" "}
          A mass of short, dense feathers on the head and neck protect against
          stinging attacks by social wasps. The crested honey buzzard is a
          year-round resident in Southeast Asia and the Indian subcontinent.
          Some birds migrate to Siberia and Japan during the summer for
          breeding. This crested honey buzzard was photographed in Mudumalai
          National Park, India
        </p>
      </section>
    </div>
  );
}
