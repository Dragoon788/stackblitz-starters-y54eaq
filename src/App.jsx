import React, { useState } from 'react';
import RecipeStep from './RecipeStep';
import Layout from './Layout';
import './style.css';

export default function App() {
  // Add states for tracking input and recipe steps
  // We are going to use two states for this react file
  // Two pieces of information: name of state and a state setter function (settler colonialsm)
  // useState expects as input the initial value for state
  const [input, setInput] = useState('');
  const [recipeSteps, setRecipeSteps] = useState({});

  console.log(input);

  return (
    <Layout>
      <form
        // Revert back to js with curly brackets
        onSubmit={(e) => {
          // TODO #1: Prevent default behavior
          e.preventDefault();

          const id = `step-${Math.floor(Math.random() * Date.now())}`;

          // TODO #3: Add new recipe step to state
          // ""..."" creates a brand new object and spread (copy) all the K/V pairs stored in that state
          const newRecipeSteps = { ...recipeStep };
          newRecipeSteps[id] = input;

          setRecipeSteps({
            ...recipeSteps,
            [id]: input,
          });

          // TODO #4: Clear input text
          setInput('');
        }}
      >
        <label htmlFor="recipe-step">Add task:</label>
        <textarea
          type="text"
          id="recipe-step"
          name="step"
          rows="3"
          // TODO #2: Set value to input & add input handler
          // This line resets the input each refresh
          value={input}
          // Storing changes in recipe tracker to our state so we can use thorughout the rest of the file
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
        <button id="add-btn" type="submit">
          Add
        </button>
      </form>

      <ol>
        {Object.entries(recipeSteps).map(([k, v]) => (
          <RecipeStep key={k} stepText={v} />
        ))}
      </ol>
    </Layout>
  );
}
