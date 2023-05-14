import React from "react";
import { Table } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import favReducer from "../../redux/reducers/favReducer";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { removeFromFav } from "../../redux/actions/actionFav";
import { FiDelete } from "react-icons/fi";
import "../Cart/Cart.css";
import { addToCart } from "../../redux/actions/actionCart";
const FavItems = ({ lan }) => {
  const dispatch = useDispatch();
  const { favItems } = useSelector((state) => state.favReducer);
  return (
    <div>
      <Table
        css={{
          height: "auto",
          minWidth: "40%",
          width: "100%",
        }}
      >
        <Table.Header>
          <Table.Column className=" title">
            {" "}
            {lan === "FR" ? "L'image du produit" : "Product's Image"}
          </Table.Column>
          <Table.Column className=" title">
            {" "}
            {lan === "FR" ? "Produit" : "Product"}
          </Table.Column>
          <Table.Column className=" title">
            {lan === "FR" ? "Prix" : "Price"}
          </Table.Column>

          <Table.Column className=" title">
            {" "}
            {lan === "FR" ? "Suprimer" : "Delete"}
          </Table.Column>
          <Table.Column className=" title">
            {" "}
            {lan === "FR" ? "Ajouter au panier" : "Add to cart"}
          </Table.Column>
        </Table.Header>

        <Table.Body>
          {favItems.map((el, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <img
                  className="imageCart"
                  src={el.product.cover.front}
                  alt=""
                />
              </Table.Cell>
              <Table.Cell className="desc">{el.product.productName}</Table.Cell>
              <Table.Cell className="desc">{el.product.price} $</Table.Cell>

              <Table.Cell>
                {" "}
                <AiFillDelete
                  onClick={() => dispatch(removeFromFav(el.product))}
                >
                  <FiDelete />
                </AiFillDelete>
              </Table.Cell>
              <Table.Cell>
                <button
                  className="probutton"
                  variant="primary"
                  onClick={() => dispatch(addToCart(el.product._id, 1))}
                >
                  <AiOutlineShoppingCart />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FavItems;
