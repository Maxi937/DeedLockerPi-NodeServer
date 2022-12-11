"use strict";

import fetch from 'node-fetch';

test();

async function test() {
  console.log("Hello World")

  try {
    const response = await fetch('https://deed-locker.onrender.com/deedlockerPi/test');
    console.log(response)
    //const myJson = await response.json();
    //console.log(myJson);
  } catch (err) {
    console.log(err)
  }
}

