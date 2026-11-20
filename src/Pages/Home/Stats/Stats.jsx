import './Stats.css';

const stats = [
  { icon: '🎓', number: '500+', label: 'Students Sponsored' },
  { icon: '🏫', number: '12', label: 'Schools Supported' },
  { icon: '🤝', number: '100%', label: 'Donation Transparency' },
  { icon: '📅', number: '2015', label: 'Year Founded' },
];

function Stats() {
  return (
    <section className="stats-wrapper">
      <div className="container">
        <div className="stats-card">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-icon">{stat.icon}</span>
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;