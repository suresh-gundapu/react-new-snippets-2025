/**
 *What is a Component in React?:
 ---------------------------------
A Component is a reusable piece of UI in React. It’s like a function that returns JSX (HTML + JS mix).

🧠 Think of components like Lego blocks: you build the full app by combining small pieces.
Types of Components
✅ 1. Functional Components (Modern React – preferred)
✅ 2. Class Components (Old style – rarely used now)

🎯 Why use Components?:
======================
Benefit	Description
🧱 Reusability	One component used in many places
🔁 Maintainability	Code is broken into smaller parts
🧩 Composition	Components inside components
🔄 Dynamic	React updates components on state/prop change

Interview Questions on Components
Question	Answer
What is a component?	A reusable UI unit in React.
Functional vs Class components?	Functional is modern, uses hooks. Class is old, uses lifecycle methods.
What is JSX?	JavaScript + XML, used to write UI in React.
What are props?	Inputs sent from parent to child component.
What is state?	Internal memory used to manage data within a component.

💬 Final Interview Answer:
===============================
"A component in React is a reusable UI building block. React components can be functional or class-based.
 They can receive input via props and manage dynamic data using state. We combine multiple components to build complex UIs.
  Functional components with hooks are the standard in modern React."
 */

const BasicComp = () => {
  return (
    <>
      <div>
        <h1>This is basic component</h1>
      </div>
    </>
  );
};

export default BasicComp;
