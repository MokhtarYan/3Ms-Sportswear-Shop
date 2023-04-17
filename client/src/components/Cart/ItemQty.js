import React from "react";
// import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../../redux/actions/actionCart";

import { BsPatchPlusFill } from "react-icons/bs";

import { BsPatchMinus } from "react-icons/bs";

const ItemQty = ({ el }) => {
  const dispatch = useDispatch();

  /////////////////////////
  // console.log(el.quantity)

  ////////////quantite achete qty est superieur de quantity(stock)

  // if( el.quantity < el.qty){
  // alert('not exist in stock')
  //      }

  //////////////////////

  return (
    <div className="ItemQty">
      {el.qty > 1 ? (
        <div>
          <BsPatchMinus onClick={() => dispatch(decrementQty(el))}>
            <i className="fa fa-minus-circle"></i>
          </BsPatchMinus>{" "}
          <span>{el.qty}</span>{" "}
          {el.product.avQuantity > el.qty && (
            <BsPatchPlusFill onClick={() => dispatch(incrementQty(el))}>
              <i className="fa fa-plus-circle"></i>
            </BsPatchPlusFill>
          )}
        </div>
      ) : (
        <div>
          <BsPatchMinus>
            <i className="fa fa-minus-circle"></i>
          </BsPatchMinus>
          <span>{el.qty}</span>
          <BsPatchPlusFill onClick={() => dispatch(incrementQty(el))}>
            <i className="fa fa-plus-circle"></i>
          </BsPatchPlusFill>
        </div>
      )}
    </div>
  );
};

export default ItemQty;
