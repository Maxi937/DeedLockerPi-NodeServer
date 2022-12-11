"use strict";

import fetch from 'node-fetch';

test();

async function test() {
  const url = 'https://deed-locker.onrender.com/deedlockerPi/test'

  try {
    const response = await fetch(url);
    console.log(await response.json())
    //const myJson = await response.json();
    //console.log(myJson);
  } catch (err) {
    console.log(err)
  }
}

