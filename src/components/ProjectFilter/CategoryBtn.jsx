import React from 'react';

function CategoryBtn({ name, handleSetCategory, label, className }) {
    return (
        <>
            <button className={className} type="button" onClick={() => handleSetCategory(name)}>
                {label}
            </button>
        </>
    );
}

export default CategoryBtn;
