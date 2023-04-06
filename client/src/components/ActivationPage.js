import axios from "axios";
import React from "react";
import { useParams } from "react-router";

export default function ActivationPage() {
  const { activationCode } = useParams();
  console.log(activationCode);
  axios.post(`http://localhost:8000/user/auth/verifyUser/${activationCode}`);

  return <div>Your account is activated. You can log in now</div>;
}
