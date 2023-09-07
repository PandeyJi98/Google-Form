import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ title: '', description: '', questions: [] });
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('short-answer');
  const [answerFields, setAnswerFields] = useState([]);
  const [submittedForm, setSubmittedForm] = useState(null);

  const addQuestion = () => {
    const newQuestion = {
      text: question,
      type: questionType,
      required: false, // You can add a checkbox for this in your UI
    };
    setForm({ ...form, questions: [...form.questions, newQuestion] });
    setQuestion('');
    setAnswerFields([]); // Reset answer fields after adding a question
  };

  const renderAnswerFields = () => {
    if (questionType === 'multiple-choice' || questionType === 'checkboxes') {
      // For multiple choice and checkboxes, render two input fields
      return (
        <div>
          <label>Option 1:</label>
          <input type="text" placeholder="Option 1" />
          <label>Option 2:</label>
          <input type="text" placeholder="Option 2" />
        </div>
      );
    } else if (questionType === 'short-answer' || questionType === 'long-answer') {
      // For short and long answer, render a textarea
      return (
        <div>
          <label>Answer:</label>
          <textarea rows="4" cols="50" placeholder="Answer"></textarea>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    // Here, you would typically send the form data to a server or database.
    // For this example, we'll just display the form data in the console.
    console.log('Form Data:', form);
    setSubmittedForm(form);
  };

  return (
    <div className="App">
      <h1>Google Form Creator</h1>
      <h2>Create Form</h2>
      <label>Title:</label>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <label>Description:</label>
      <input
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="short-answer">Short Answer</option>
          <option value="long-answer">Long Answer</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="checkboxes">Checkboxes</option>
        </select>
        {renderAnswerFields()}
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <h2>Form Preview</h2>
      <p>Title: {form.title}</p>
      <p>Description: {form.description}</p>
      <ul>
        {form.questions.map((q, index) => (
          <li key={index}>
            {q.text} - Type: {q.type}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {submittedForm && (
        <div>
          <h2>Submitted Form Data</h2>
          <pre>{JSON.stringify(submittedForm, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
