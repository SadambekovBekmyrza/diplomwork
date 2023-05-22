import "./pages.css";
import img4 from ".././assets/info4.webp";

export default function Info() {
  return (
    <div className="Info">
      <section className="content-1">
        <h2>INFORMATION</h2>
        <h3>Get your order in the most convenient way</h3>
        <div className="content-card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60px"
              viewBox="0 96 960 960"
              width="60px"
              fill="crimson"
            >
              <path d="M480 814q-67 0-129 23.5T235 907v9h490v-9q-54-46-116-69.5T480 814Zm0-60q74 0 139.5 24.5T740 845V236H220v609q55-42 120.5-66.5T480 754Zm2-139q-32.5 0-55.25-22.75T404 537q0-32.5 22.75-55.25T482 459q32.5 0 55.25 22.75T560 537q0 32.5-22.75 55.25T482 615ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm262-301q58 0 98-40t40-98q0-58-40-98t-98-40q-58 0-98 40t-40 98q0 58 40 98t98 40Zm-2-138Z" />
            </svg>
            <h4>Courier to door</h4>
            <p>
              Delivery of the order is carried out by the courier of the company
              you choose on working days after the confirmation of the order by
              our operator. Orders are collected and sent within 1-2 working
              days from the date of payment and confirmation of the order.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60px"
              viewBox="0 96 960 960"
              width="60px"
              fill="crimson"
            >
              <path d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Zm60 0 142-47V302l-142 54v505Zm-458-12 142-54V290l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z" />
            </svg>
            <h4>At the point of issue</h4>
            <p>
              Delivery of the order is carried out to the point of issue, which
              you choose, after confirmation of the order by our operator.
              Orders are collected and sent within 1-2 working days from the
              date of payment and confirmation of the order.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60px"
              viewBox="0 96 960 960"
              width="60px"
              fill="crimson"
            >
              <path d="M481 1027 346 896H160V710L26 576l134-134V256h186l135-134 133 134h186v186l134 134-134 134v186H614l-133 131Zm0-452Zm0 368 107.917-107H740V685l109-109-109-109V316H589L481 207 371 316H220v151L111 576l109 109v151h150l111 107ZM363 746l117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
            </svg>
            <h4>Secure packaging</h4>
            <p>
              We understand the importance of keeping your puzzles in pristine
              condition. Each puzzle carefully packaged in sturdy materials to
              protect against any potential damage during transit. We take great
              care ensure that your puzzle arrives in perfect shape.
            </p>
          </div>
          <div className="card-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              viewBox="0 96 960 960"
              width="60"
              fill="crimson"
            >
              <path d="M160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q27.5 0 55 3t55 9v59q-28-6-55-8.5t-55-2.5q-57 0-110.5 12T252 750q-14 7-23 21.5t-9 30.5v34h370v60H160Zm60-60h370-370Zm260-261q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-60q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm250 593V846h-80V626h214l-80 160h79l-133 232Z" />
            </svg>
            <h4>Fast delivery</h4>
            <p>
              Fast and Reliable Shipping: We partner with trusted shipping
              carriers to deliver your puzzles swiftly and securely to your
              doorstep. Our team works diligently to process and dispatch your
              orders as quickly as possible, ensuring minimal waiting time.
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
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6514.141922881702!2d37.5996420716113!3d55.77580560232949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a6d82ae62d9%3A0x761079c448721fd2!2z0JrRg9Cx0LjQutC4INCg0YPQsdC40LrQsCDQuCDQs9C-0LvQvtCy0L7Qu9C-0LzQutC4INChQ0NTVE9SRQ!5e0!3m2!1sru!2skg!4v1684579029322!5m2!1sru!2skg"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </section>
      <section className="content-4">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6514.141922881702!2d37.5996420716113!3d55.77580560232949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a6d82ae62d9%3A0x761079c448721fd2!2z0JrRg9Cx0LjQutC4INCg0YPQsdC40LrQsCDQuCDQs9C-0LvQvtCy0L7Qu9C-0LzQutC4INChQ0NTVE9SRQ!5e0!3m2!1sru!2skg!4v1684579029322!5m2!1sru!2skg"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
