export default function Placeholder() {
  return (
    <div className="row">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className="card placeholder-glow">
            <div
              className="placeholder w-100"
              style={{ height: '200px', backgroundColor: '#dee2e6' }}
            ></div>
            <div className="card-body">
              <p className="placeholder col-6"></p>
              <p className="placeholder col-4"></p>
              <p className="placeholder col-8"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

