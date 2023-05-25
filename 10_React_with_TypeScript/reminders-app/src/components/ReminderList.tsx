import React from "react";
import { Reminder } from "../models/Reminder";
import "./ReminderList.scss"

interface ReminderListProps {
  reminders: Reminder[];
}

function ReminderList({ reminders }: ReminderListProps) {
  return (
    <ul className="list-group">
      {reminders.map((reminder) => (
        <li className="list-group-item" key={reminder.id}>
          <div className="todoContainer">
            <span>{reminder.title}</span>
            <button className="btn btn-outline-danger"
            onClick={(e) => {
              
            }}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
