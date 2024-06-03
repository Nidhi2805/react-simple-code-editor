import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css'; // Example style, you can choose other themes

const RecipeEditor = ({ onAddRecipe }) => {
  const [code, setCode] = useState('');

  const handleAddRecipe = () => {
    if (code.trim()) {
      onAddRecipe(code);
      setCode('');
    }
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.markdown, 'markdown')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          border: '1px solid #ddd',
          borderRadius: '5px',
          minHeight: '200px',
          marginBottom: '10px',
        }}
      />
      <button onClick={handleAddRecipe} style={{ padding: '10px 20px', fontSize: '16px' }}>Add Recipe</button>
    </div>
  );
};

export default RecipeEditor;
