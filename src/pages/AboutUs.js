import logo from "../assets/logomini.png";
import Logo from "../assets/logominiblack.png";
import img1 from "../assets/about1.webp";
import img2 from "../assets/about2.webp";
import img3 from "../assets/about3.webp";
import img4 from "../assets/about4.webp";
import img5 from "../assets/about5.webp";
import img6 from "../assets/about6.webp";
import img7 from "../assets/about7.webp";
import img8 from "../assets/about8.webp";
import img9 from "../assets/about9.webp";
import img10 from "../assets/about10.webp";
import img11 from "../assets/about11.webp";
import img12 from "../assets/about12.webp";
import img13 from "../assets/iconVK.webp";
import img14 from "../assets/iconYou.webp";
import img15 from "../assets/iconINST.webp";
import img16 from "../assets/iconTik.webp";
import { NavLink } from "react-router-dom";
import "./pages.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <section className="box-1">
        <div>
          <h2>
            <img src={logo} alt="logo" className="logonone" />
            About US
          </h2>
          <p>
            We are Brain Life! We are not just a store of puzzles, skilltoys,
            various dice and other good stuff. We are a team of like-minded
            people, setting ourselves a large-scale task - to give people a
            feeling of joy and inspiration from the victory over an impossible
            Rubik's cube, an irresistible kendama, an uncontrollable petaminx -
            it doesn't matter what it is. The important thing is that at this
            moment a person conquers himself and becomes better. That's why we
            work 24 hours 7 days a week.
          </p>
          <p>Yours, Brain Life!</p>
        </div>
      </section>
      <section className="box-2">
        <div className="card">
          <h3>12</h3>
          <p>YEARS WORK</p>
        </div>
        <div className="card">
          <h3>255.000 +</h3>
          <p>SUCCESSFUL ORDERS</p>
        </div>
        <div className="card">
          <h3>100 +</h3>
          <p>SPONSORED EVENTS</p>
        </div>
        <div className="card">
          <h3>15 +</h3>
          <p>OFFICIAL DISTRIBUTORS</p>
        </div>
      </section>
      <section className="box-3">
        <div>
          <img src={img2} alt="img"></img>
        </div>
        <div>
          <img src={img1} alt="img"></img>
        </div>
        <div>
          <img src={img3} alt="img"></img>
        </div>
      </section>
      <section className="box-4">
        <h2>
          <img src={Logo} alt="logo" className="logonone" />
          Where are we?
        </h2>
        <p>
          We are located 5 minutes walk from St. Metro Tsvetnoy Boulevard at the
          address 2nd Volkonsky per., 12.
        </p>
        <div>
          <img src={img5} alt="img" />
          <img src={img4} alt="img" />
          <img src={img6} alt="img" />
        </div>
      </section>
      <section className="box-5">
        <h2>Official distributors</h2>
        <p>
          We are official distributors of the best brands that produce Rubik's
          Cubes and other puzzles
        </p>
        <div>
          <img src={img7} alt="logos-company" />
          <img src={img8} alt="logos-company" />
          <img src={img9} alt="logos-company" />
          <img src={img10} alt="logos-company" />
          <img src={img11} alt="logos-company" />
          <img src={img12} alt="logos-company" />
        </div>
      </section>
      <section className="box-6">
        <h2>We are in social networks</h2>
        <p>
          Follow our activity in our accounts, where you can always find
          information about the latest news, participate in contests and
          sweepstakes and win cubes!
        </p>
        <div>
          <NavLink target="_blank" to="https://vk.com/cccstore">
            <img src={img13} alt="icon-VK" />
            VK group
          </NavLink>
          <NavLink target="_blank" to="https://www.youtube.com/user/CCCstore">
            <img src={img14} alt="icon-YouTube" />
            YouTube channel
          </NavLink>
          <NavLink target="_blank" to="https://www.instagram.com/cccstore.ru">
            <img src={img15} alt="icon-Instagram" />
            Instagram
          </NavLink>
          <NavLink target="_blank" to="https://www.tiktok.com/@cccstore.ru">
            <img src={img16} alt="icon-TikTok" />
            TikTok
          </NavLink>
        </div>
      </section>
    </div>
  );
}
