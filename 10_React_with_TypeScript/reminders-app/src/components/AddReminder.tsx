import React, { useState } from "react";

interface AddReminderProps {
  onAddReminder: (title: string) => void;
}

const AddReminder = ({onAddReminder}: AddReminderProps): JSX.Element => {
	const [title, setTitle] = useState("");
	const submitReminder = (e: React.FormEvent) => {
		e.preventDefault();
		// console.log(title);
    onAddReminder(title);
    setTitle("");
	}
  return (
    <form className="row g-2 mb-3" onSubmit={submitReminder}>
      <div className="col">
        <input type="text" id="title" className="form-control" placeholder="Todo" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
      </div>
      <div className="col">
        <button className="btn btn-primary form-control" onClick={() => {}}>Add</button>
      </div>
    </form>
  );
};

export default AddReminder;
