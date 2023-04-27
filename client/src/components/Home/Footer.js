import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Home.css";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You are now signed up for our newsletter");
  };
  return (
    <div>
      <MDBFooter className="text-center" color="white">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <p className="m-3">Follow us on:</p>
            <button className="m-1">
              <GrFacebook className="m-2" />
            </button>
            <button className="m-1">
              <GrTwitter className="m-2" />
            </button>
            <button className="m-1">
              <GrInstagram className="m-2" />
            </button>
            <button className="m-1">
              <GrLinkedin className="m-2" />
            </button>
          </section>

          <section className="">
            <form onSubmit={handleSubmit}>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    placeholder="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            www.3MSportswear.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
