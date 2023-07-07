
import React from 'react';

interface FilterProps {
  onSubmit: (data: FormData) => void;
  onReset: () => void;
}

const Filter: React.FC<FilterProps> = ({ onSubmit, onReset }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    onSubmit(formData);
  };

  const handleReset = () => {
    onReset();
  };

  return (
	<form className="filter-form" method="post"  onSubmit={handleSubmit}>
	  <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <select id="organization">
          <option value="">Select</option>
        </select>
	  </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder='User'
          name="username"
        />
      </div>
	  <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder='Email'
          name="email"
        />
	  </div>
	  <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder='Date'
          name="date"
        />
	  </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
        />
      </div>
	  <div className="form-group">
        <label htmlFor="status">Status</label>
        <select id="status" name="status">
          <option value="">Select</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
	  </div>
	  <div>
        <button onClick={handleReset} type="reset">Reset</button>
        <button type="submit">Filter</button>
	  </div>
	</form>
  );
};

export default Filter;
