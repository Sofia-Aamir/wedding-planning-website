import React, { useState } from 'react';
import Footer from '../Pages/Footer';

const PlanningTool = () => {
  // State for budget calculator
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  // Predefined checklist items
  const initialTasks = [
    'Set the wedding date',
    'Choose and book the venue',
    'Create a wedding guest list',
    'Select wedding vendors (photographer, florist, caterer)',
    'Shop for wedding attire',
    'Send out save-the-date invitations',
    'Book entertainment (DJ or band)',
    'Plan the ceremony and reception decor',
    'Order the wedding cake',
    'Finalize honeymoon plans',
  ];

  // State for checklist
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  const [completedTasks, setCompletedTasks] = useState([]);

  // State for timeline planner
  const [newEvent, setNewEvent] = useState('');
  const [events, setEvents] = useState([]);

  // Functions for budget calculator
  const handleBudgetChange = (e) => setBudget(Number(e.target.value));
  const handleExpensesChange = (e) => setExpenses(Number(e.target.value));

  // Functions for checklist
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskCheck = (index) => {
    const taskToComplete = tasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleUncheckTask = (index) => {
    const taskToReopen = completedTasks[index];
    setTasks([...tasks, taskToReopen]);
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  // Functions for timeline planner
  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents([...events, newEvent]);
      setNewEvent('');
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="text-white text-center py-6 relative" style={{ backgroundColor: '#FD8B51' }}>
        <div className="flex justify-center">
          <img src="/Images/birds.png" alt="Birds" className="w-16 h-auto mb-2" />
        </div>
        <h1 className="text-4xl font-bold mt-2">Wedding Planning Tool</h1>
      </header>

      <div className="bg-[#CB6040] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Budget Calculator */}
          <div className="bg-[#F2E5BF] p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Budget Calculator</h2>
            <div className="mb-4">
              <label className="block text-sm mb-2">Total Budget:</label>
              <input
                type="number"
                value={budget}
                onChange={handleBudgetChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your total budget"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Expenses:</label>
              <input
                type="number"
                value={expenses}
                onChange={handleExpensesChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your expenses"
              />
            </div>
            <p className="font-semibold">Remaining Budget: {budget - expenses}</p>
          </div>

          {/* Wedding Checklist */}
          <div className="bg-[#F2E5BF] p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Wedding Checklist</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full p-2 border rounded mr-2"
                placeholder="Add a new task"
              />
              <button
                onClick={handleAddTask}
                className="bg-[#FD8B51] text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>

            <h3 className="font-semibold mb-2">To-Do Tasks</h3>
            <ul className="list-disc list-inside mb-4">
              {tasks.map((task, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleTaskCheck(index)}
                      className="mr-2"
                    />
                    {task}
                  </div>
                </li>
              ))}
            </ul>

            {completedTasks.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Completed Tasks</h3>
                <ul className="list-disc list-inside">
                  {completedTasks.map((task, index) => (
                    <li key={index} className="flex items-center line-through text-gray-500">
                      <input
                        type="checkbox"
                        checked
                        onChange={() => handleUncheckTask(index)}
                        className="mr-2"
                      />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Timeline Planner */}
          <div className="bg-[#F2E5BF] p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Timeline Planner</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                className="w-full p-2 border rounded mr-2"
                placeholder="Add a new event to your timeline"
              />
              <button
                onClick={handleAddEvent}
                className="bg-[#FD8B51] text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>

            <h3 className="font-semibold mb-2">Timeline Events</h3>
            <ul className="list-disc list-inside">
              {events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanningTool;
