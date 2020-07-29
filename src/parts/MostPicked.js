import React from "react";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section ref={props.refMostPicked} className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div key={`mostpicked - ${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> / {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    className="img-cover"
                    alt={item.name}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="streched-link d-block text-white"
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
