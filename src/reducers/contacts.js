import React, { Component } from "react";

let initialState = { };

export default function(state = initialState) {
  // if (action.type === undefined) {
    return  JSON.parse(localStorage.getItem("Contacts")) ;
  // }
  // return state;
}
