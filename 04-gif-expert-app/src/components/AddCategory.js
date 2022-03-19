import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
  const [inputValue, setinputValue] = useState('');
  
  const handleInputChange = (element) => {
        setinputValue(element.target.value);
  };

  const handleSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim() != ''){
            setCategories((previousCategories) => [inputValue,...previousCategories]);
        }

        setinputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        />
    </form>
        
    
  );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

