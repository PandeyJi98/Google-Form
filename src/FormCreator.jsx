import React, { useState } from 'react';

const FormCreator = ({ addForm, setCreateForm }) => {
  const [formData, setFormData] = useState({ title: '', questions: [] });
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('short-answer');
  const [isRequired, setIsRequired] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = {
      text: question,
      type: questionType,
      required: isRequired,
    };
    setFormData({ ...formData, questions: [...formData.questions, newQuestion] });
    setQuestion('');
  };

  const handleCreateForm = () => {
    addForm(formData);
    setCreateForm(false);
  };

  return (
    <div>
      <h2>Create Form</h2>
      <label>Title:</label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
          <option value="multiple-choice">Multiple Choice</option>
          <option value="checkboxes">Checkboxes</option>
        </select>
        <label>Required:</label>
        <input
          type="checkbox"
          checked={isRequired}
          onChange={() => setIsRequired(!isRequired)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      <button onClick={handleCreateForm}>Create Form</button>
    </div>
  );
};

export default FormCreator;
