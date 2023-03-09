import React, { useState } from 'react';

function EducationForm() {
  const [noOfEducations, setNoOfEducations] = useState(1);
  const [educationList, setEducationList] = useState([{ institute: '', degree: '', year: '' }]);

  const handleNoOfEducationsChange = (e) => {
    const value = parseInt(e.target.value);
    setNoOfEducations(value);
    const newList = [];
    for (let i = 0; i < value; i++) {
      if (educationList[i]) {
        newList.push(educationList[i]);
      } else {
        newList.push({ institute: '', degree: '', year: '' });
      }
    }
    setEducationList(newList);
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleDeleteEducation = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setNoOfEducations(list.length);
    setEducationList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educationList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="noOfEducations">Number of Educations:</label>
        <input
          type="number"
          id="noOfEducations"
          name="noOfEducations"
          min="1"
          value={noOfEducations}
          onChange={handleNoOfEducationsChange}
        />
      </div>

      {educationList.map((education, index) => (
        <div key={index}>
          <h3>Education {index + 1}</h3>
          <div>
            <label htmlFor={`institute${index}`}>Institute:</label>
            <input
              type="text"
              id={`institute${index}`}
              name="institute"
              value={education.institute}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </div>
          <div>
            <label htmlFor={`degree${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree${index}`}
              name="degree"
              value={education.degree}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </div>
          <div>
            <label htmlFor={`year${index}`}>Year:</label>
            <input
              type="text"
              id={`year${index}`}
              name="year"
              value={education.year}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </div>
          {index > 0 && (
            <button type="button" onClick={() => handleDeleteEducation(index)}>
              Delete Education
            </button>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationForm;