import "./pages.css";
import img1 from ".././assets/info1.webp";
import img2 from ".././assets/info2.webp";
import img3 from ".././assets/info3.webp";
import img4 from ".././assets/info4.webp";
import img5 from ".././assets/mapstore.png";

export default function Info() {
  return (
    <div className="Info">
      <section className="content-1">
        <h2>INFORMATION</h2>
        <h3>Get your order in the most convenient way</h3>
        <div className="content-card">
          <div>
            <img src={img2} alt="icon" />
            <h4>Courier to door</h4>
            <p>
              Delivery of the order is carried out by the courier of the company
              you choose on working days after the confirmation of the order by
              our operator. Orders are collected and sent within 1-2 working
              days from the date of payment and confirmation of the order.
            </p>
          </div>
          <div>
            <img src={img1} alt="icon" />
            <h4>At the point of issue</h4>
            <p>
              Delivery of the order is carried out to the point of issue, which
              you choose, after confirmation of the order by our operator.
              Orders are collected and sent within 1-2 working days from the
              date of payment and confirmation of the order.
            </p>
          </div>
          <div>
            <img src={img3} alt="icon" />
            <h4>Russian Post</h4>
            <p>
              Delivery of the order occurs to your post office. Orders are
              collected and sent within 1-2 working days from the date of
              payment and confirmation of the order.
            </p>
          </div>
        </div>
      </section>
      <section className="content-2">
        <img src={img4} alt="img" />
      </section>
      <section className="content-3">
        <div className="content-3left">
          <h4>2nd Volkonsky Lane, 12</h4>
          <p>
            Pickup from our company store in Moscow.
            <br />
            Check availability by phone before coming
            <br />
            to the store without ordering. Lead time for
            <br />
            orders is 5 days
          </p>
        </div>
        <div className="content-3right">
          <div className="info">
            <p>Address</p>
            <h5>
              Moscow, st. metro Tsvetnoy Boulevard, 2nd Volkonsky per., 12
            </h5>
          </div>
          <div className="info">
            <p>Working hours</p>
            <h5>from 11:00 to 20:00 every day without days off</h5>
          </div>
          <div className="info">
            <p>Phone number</p>
            <h5>8-977-385-74-75</h5>
          </div>
        </div>
        <img src={img5} alt="map" className="map" />
      </section>
    </div>
  );
}
