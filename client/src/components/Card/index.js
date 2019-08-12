import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col";
import Row from "../Row";

function Card(props) {
  return (
    <div
      className="card"
    // style={{
    //   backgroundImage: props.image ? `url(${props.image})` : "none"
    // }}
    >
      <Row>
        <Col size="md-3">
          <img className='card-img' src={props.image} alt='Card image cap' />
        </Col>
        <Col size="md-9">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2">By {props.authors}</h6>
          <h6 className="card-subtitle mt-2">Description</h6>
          <p className="card-text">
            {props.description}
          </p>
        </Col>
      </Row>
      {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
      {/* <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      /> */}
    </div>
  );
}

export default Card;
