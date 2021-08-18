// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

//import node modules with the require keyword

const essentials = {
    drink: "water",
    eat: "snickers",
    fun: "phone",
    friend: "facebook"
  };
  
  const niceToHaves = {
    tools: ["can opener", "flashlight", "matches"],
    safety: ["first aid kit", "gloves"]
  };
  
  const nonessentials = {
    cookware: "waffleMaker",
    technology: "charger"
  };
  
  // module.exports is essentially an object that we can add data or variables to
  // We can access them from other files using the 'require' keyword.
  //module.exports written as an object
  module.exports = {
    essentials: essentials,
    niceToHaves: niceToHaves,
    nonessentials: nonessentials
  };
  