import React from 'react';
import 'prismjs/themes/prism.css'; // Example style, you can choose other themes
import { highlight, languages } from 'prismjs';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe, index) => (
        <pre
          key={index}
          style={{
            background: '#f5f5f5',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
          dangerouslySetInnerHTML={{
            __html: highlight(recipe, languages.markdown, 'markdown'),
          }}
        />
      ))}
    </div>
  );
};

export default RecipeList;
