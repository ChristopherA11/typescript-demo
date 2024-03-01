import React, { useState } from "react";

interface TextState {
    name: string;
    age: number;
}

const TextBoxComponent = () => {
  const [text, setText] = useState<TextState>({} as TextState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText({...text, name:event.target.value});
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setText({...text, age: parseInt(event.target.value)});
  }

  return (
    <div>
      <input type="text" value={text.name} onChange={handleChange} />
      <p>The entered text is: {text.name}</p>
      <input type="number" value={text.age} onChange={handleAgeChange} />
      <p>The entered text is: {text.age}</p>
    </div>
  );
};

export default TextBoxComponent;