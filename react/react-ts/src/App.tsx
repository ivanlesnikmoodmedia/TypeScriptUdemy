import Header from './components/Header';
import reactSvg from './assets/react.svg';
import CourseGoals from './components/CourseGoals';
import { useState } from 'react';

function App() { 
  const [goals] = useState([
    { 
      id: 'g1', 
      text: 'Finish the Course', 
      description: 'Complete all modules and exercises to finish the course successfully.' },
    { 
      id: 'g2',
      text: 'Learn TypeScript', 
      description: 'Understand the basics of TypeScript and how to use it with React.' },
    { 
      id: 'g3', 
      text: 'Build a React App', 
      description: 'Create a fully functional React application by the end of the course.' }
  ]); 

  function handleDeleteGoal(id: string) {
    
    console.log(`Delete goal with id: ${id}`);
  }

  return (
  <main>
     <Header image={{ src: reactSvg, alt: "React Logo" }}></Header> 
        <h1>our Course Goals</h1>
    <CourseGoals
  goals={[
    { 
      id: 'g1', 
      text: 'Finish the Course', 
      description: 'Complete all modules and exercises to finish the course successfully.' },
    { 
      id: 'g2', 
      text: 'Learn TypeScript', 
      description: 'Understand the basics of TypeScript and how to use it with React.' },
    { 
      id: 'g3', 
      text: 'Build a React App', 
      description: 'Create a fully functional React application by the end of the course.' }
  ]}
  />

  </main>
  );
}

export default App
