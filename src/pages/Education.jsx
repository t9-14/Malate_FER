const Education = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <h2 className="section-title">Educational Journey</h2>
      <div className="row">
        {[
          {
            title: "Elementary School",
            school: "Calabanga Central Division Pilot School",
            icon: "🏫"
          },
          {
            title: "High School",
            school: "Sta. Cruz Ratay ALS",
            icon: "📚"
          },
          {
            title: "Senior High School",
            school: "SPJ International Technology Institute Inc.",
            icon: "🎓"
          },
          {
            title: "College",
            school: "Naga College Foundation, Inc.",
            details: ["Bachelor of Science in Computer Science", "2nd Year"],
            icon: "🖥️"
          }
        ].map((edu, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100 hover-effect">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-2 me-3">{edu.icon}</span>
                  <h5 className="card-title mb-0">{edu.title}</h5>
                </div>
                <p className="card-text">{edu.school}</p>
                {edu.details && edu.details.map((detail, i) => (
                  <p key={i} className="card-text text-muted">{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;