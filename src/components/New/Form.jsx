import React from "react";

const Form = ({ onSubmit }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Fullname</label>
        <input type="text" name="name" id="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="phone"></label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number with country code"
        />
      </div>
      <div>
        <label htmlFor="address"></label>
        <input type="text" name="address" id="address" placeholder="Address" />
      </div>
      <div>
        <label htmlFor="social"></label>
        <input type="url" name="social" id="social" placeholder="Social" />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="description"></label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
