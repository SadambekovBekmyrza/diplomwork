import "./pages.css";
import headerimg from ".././assets/header-img-1.jpg";
import homeimg1 from ".././assets/home-1.jpg";
import homeimg2 from ".././assets/home-2.jpg";
import homeimg3 from ".././assets/home-3.jpg";
import homeimg4 from ".././assets/home-4.jpg";

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
        <h2>We sell</h2>
        <div>
          <div>
            <h4>Rubik's Cube</h4>
            <img src={homeimg1} alt="" />
          </div>
          <div>
            <h4>Chess</h4>
            <img src={homeimg2} alt="" />
          </div>
          <div>
            <h4>Puzzle</h4>
            <img src={homeimg3} alt="" />
          </div>
          <div>
            <h4>Yo-Yo</h4>
            <img src={homeimg4} alt="" />
          </div>
        </div>
        <h2>and much more</h2>
      </section>
    </div>
  );
}
