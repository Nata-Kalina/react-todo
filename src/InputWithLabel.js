import React from 'react';

const InputWithLabel = ({ id, todoTitle, handleTitleChange, children }) => {
 
    const inputRef = React.useRef();
    React.useEffect(() => {
      inputRef.current.focus();
    });

    return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
