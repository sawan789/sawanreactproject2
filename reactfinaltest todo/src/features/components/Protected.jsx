import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let getemailid = localStorage.getItem("emailData");
    if (!getemailid) {
      navigate("/login");
    }
  });
  return <div>{<Component />}</div>;
};

export default Protected;
