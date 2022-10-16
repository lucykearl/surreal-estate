import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initalState = {
    fields: {
      title: "Description of property",
      type: "Flat",
      city: "Manchester",
      bedrooms: "Number of bedrooms",
      bathrooms: "Number of Bathrooms",
      price: "Price of the property",
      email: "Your email address",
    },
  };

  const [fields, setFields] = useState(initalState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2>Add Property Page</h2>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
            classname="add-property-select"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            className="add-property-input"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="0"
            type="number"
            min="0"
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            className="add-property-input"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="0"
            type="number"
            min="0"
          />
        </label>
        <label htmlFor="price">
          Price
          <span className="add-property-price-span">£</span>
          <input
            className="add-property-input"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="100000"
            min="0.00"
            step="500"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="add-property-input"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="your@email.com"
            type="email"
          />
        </label>
        <label htmlFor="type">
          Type
          <select
            className="add-property-select"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <button className="add-property-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
