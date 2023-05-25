import React, { useState, useEffect } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/Reminder';
import reminderService from './services/reminders';
import AddReminder from './components/AddReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
      const res = await reminderService.getTodos();
      setReminders(res);
  };
  const addReminder = async (title: string) => {
    // reminders.push({})
    const newReminder = await reminderService.addReminder(title);
    console.log(newReminder);
    setReminders([newReminder, ...reminders]);
  }
  useEffect(() => {
    loadReminders();
  }, [])
  return (
    <div className="App">
      <AddReminder onAddReminder={addReminder}></AddReminder>
      <ReminderList reminders={reminders}></ReminderList>
    </div>
  );
}

export default App;
