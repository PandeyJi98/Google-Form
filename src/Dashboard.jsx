import React from 'react';

const Dashboard = ({ forms, setCreateForm }) => {
  return (
    <div>
      <h2>Your Forms</h2>
      <button onClick={() => setCreateForm(true)}>Create New Form</button>
      <ul>
        {forms.map((form, index) => (
          <li key={index}>{form.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
