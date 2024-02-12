import React from 'react';
import './product-card.css';


import Dropdown from 'react-bootstrap/Dropdown';
function ProductCard({ title, imageUrl, quantity, price, status }) {
    return <>
        <div className="card">

            {/* <Dropdown style={{ marginBottom: 10 }}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                    <Dropdown style={{ marginLeft: 10 }}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Status
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Activate</Dropdown.Item>
                            <Dropdown.Item>Deactivate</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Menu>
            </Dropdown> */}
            <div class="w3-dropdown-hover dropdownHeader">
                <button className="w3-button w3-black dropdownButton">Actions</button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                    <a href="#" class="w3-bar-item w3-button">Edit</a>
                    <a href="#" class="w3-bar-item w3-button">Delete</a>
                </div>
            </div>

            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>Quantity available : {quantity}</p>
            <p>Price : {price}</p>
            {status ? (<p>Active</p>) : (<p>Inactive</p>)}
        </div>
    </>;
}

export default ProductCard;
