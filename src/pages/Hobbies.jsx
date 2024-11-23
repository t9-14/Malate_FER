const Hobbies = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <h2 className="section-title">My Hobbies</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 hover-effect">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-2 me-3">📚</span>
                <h5 className="card-title mb-0">Reading Books</h5>
              </div>
              <p className="card-text">
                I particularly love novels, especially in the genres of adventure 
                and self-discipline. I also enjoy comics, including:
              </p>
              <ul className="list-unstyled">
                <li>• Japanese manga</li>
                <li>• Korean manhwa</li>
                <li>• Chinese manhua</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 hover-effect">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-2 me-3">🎮</span>
                <h5 className="card-title mb-0">Strategic Gaming</h5>
              </div>
              <p className="card-text">
                I engage in games that challenge my critical thinking and 
                problem-solving skills. These games help me develop:
              </p>
              <ul className="list-unstyled">
                <li>• Strategic thinking</li>
                <li>• Decision making</li>
                <li>• Resource management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;