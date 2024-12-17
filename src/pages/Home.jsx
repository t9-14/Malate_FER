import './Home.css';

const Home = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <div className="text-center">
        <h1 className="display-4 mb-4 fw-bold">Welcome To My Web Page!</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead mb-4">
              I'm Justin Jon G. Malate and this is my personal web page. I'm currently a 2nd year Computer Science student at Naga College Foundation, Inc.
            </p>
            <div className="card p-4 mb-4 hover-effect">
              <p>
                In addition to my studies, I love exploring new technologies and keeping up with 
                the latest trends in the tech world. I also enjoy sharing my thoughts on various 
                topics, whether it's through writing or discussions with friends.
              </p>
            </div>
            <p className="mt-4 text-secondary">
              Feel free to browse around and get to know me better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
