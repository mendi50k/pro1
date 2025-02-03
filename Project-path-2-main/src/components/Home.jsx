import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AiImage from '../images/th.jpg';
import DogImage from '../images/aavas.jpg';
import RepImage from '../images/rep.jpeg';

function Home() {
  const articles = [
    {
      id: 1,
      title: "Learn About AI",
      image: AiImage,
      content: "Learn the fundamentals of Artificial Intelligence.",
      link: "/ai",
    },
    {
      id: 2,
      title: "Dog Breed Information",
      image: DogImage,
      content: "Discover information about various dog breeds.",
      link: "/dog-breed",
    },
    {
      id: 3,
      title: "Send Report",
      image: RepImage,
      content: "Submit a report and help us improve.",
      link: "/report",
    },
  ];

  // STATE FOR DYNAMIC REPORT LIST
  const [reports, setReports] = useState([
    { id: 1, location: "Park A", description: "Small brown dog spotted" },
    { id: 2, location: "Street B", description: "Injured black puppy" },
  ]);
  const [newReport, setNewReport] = useState({ location: "", description: "" });

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  // ADD NEW REPORT TO LIST
  const handleSubmit = () => {
    if (!newReport.location || !newReport.description) return;

    const newEntry = {
      id: reports.length + 1,
      ...newReport,
    };

    setReports([...reports, newEntry]);
    setNewReport({ location: "", description: "" }); // Clear input fields
  };

  return (
    <div className="main">
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            {/* Make the image clickable */}
            <Link to={article.link}>
              <img src={article.image} alt={article.title} className="article-image" />
            </Link>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-content">{article.content}</p>
          </div>
        ))}
      </div>

      {/* 🚀 NEW FEATURE: STRAY DOG REPORTS LIST */}
      <div className="report-section">
        <h2>Stray Dog Reports</h2>
        <ul>
          {reports.map((report) => (
            <li key={report.id}>
              <strong>Location:</strong> {report.location} - <strong>Details:</strong> {report.description}
            </li>
          ))}
        </ul>

        {/* INPUT FORM TO ADD NEW REPORT */}
        <div className="report-form">
          <input
            type="text"
            name="location"
            value={newReport.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
          <input
            type="text"
            name="description"
            value={newReport.description}
            onChange={handleChange}
            placeholder="Describe the dog..."
          />
          <button onClick={handleSubmit}>Submit Report</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
