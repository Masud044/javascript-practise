const d =  new Date();
 const r = d.toDateString();
console.log(r)
//utc string date formet
const utc =  new Date();
  const rr = utc.toUTCString();
console.log(rr)

//ISO date formet
const iso =  new Date();
  const io = iso.toISOString();
console.log(io)
//return the number of milisecond
let msec = Date.parse("March 21, 2012");
console.log(msec)