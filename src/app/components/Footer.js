import React from "react";

import PropTypes from 'prop-types';

//functional component
//Stateless component
//Presentational component

export default function Footer(props) {

    //deconstruct
    let {title, year} = props;

    return (
        <div>
            <hr />
            Copyrights@ {year}, {title}

            <p>City {props.address.city} </p>

            <button onClick={(e) => { props.onShow(e, "Chennai") }  }>
               Contact
            </button>

        </div>
    )
}

//propTypes is a keyword (p is small)
Footer.propTypes = {
    title: PropTypes.string, // optional
    year: PropTypes.number.isRequired, //mandatory

    onShow: PropTypes.func,

    //any object
    //address: PropTypes.object
    address: PropTypes.shape ({
        city: PropTypes.string.isRequired, //mandatory
        pincode: PropTypes.number //optional
    }).isRequired //address is mandatory
}

//default props when value is not passed
//defaultProps is a keyword
Footer.defaultProps = {
    title: 'Product App'
}