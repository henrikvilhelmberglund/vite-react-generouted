import React from "react";

function RenderUser({ name, email }) {
  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>Name:</strong> {name.first} {name.last}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      {/* Add more properties as needed */}
    </div>
  );
}

export default RenderUser;
