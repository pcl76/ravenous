import React from 'react'

const Business_example = {
  name: "paul",
  address: "Amsterdam"
}

function Business() {



  
    return (
  <div>
    <h2>{Business_example.name}</h2>
    <h3>Adress</h3>
    <h3>City</h3>
    <h3>State Zipcode</h3>
    <h2>Category</h2>
    <h3>Rating</h3>
    <h3>Review count</h3>
  </div>
    )
  }
  
  export default Business;