import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteTech} from "../../actions/techActions";

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
};

function TechItem({tech: {id, firstName, lastName}, deleteTech}) {
    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href='#!' onClick={() => deleteTech(id)} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    );
}

export default connect(null, {deleteTech})(TechItem);