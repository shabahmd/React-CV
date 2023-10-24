// PersonalDetail.jsx
import React, { useState } from 'react';
import MyForm from './MyForm';

function PersonalDetail() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <h2>Personal Details</h2>
            <button onClick={toggleFormVisibility}>
                {isFormVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {isFormVisible && <MyForm />}
        </div>
    );
}

export default PersonalDetail;
