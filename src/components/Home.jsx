
export default function Home(params) {
  return (
    <section className="mainBox">
      <div className="leftBox">
        <div className="LinkItemBox">
          <a href="https://vonble.netlify.app/">Vonble</a>
          <p>
            E-commerce website.
            <span style={{ color: "gray" }}>
              Not yet completed Please use PC
            </span>
          </p>
        </div>
        <div className="LinkItemBox">
          <a href="https://bankappvasawat.netlify.app/">Bank App</a>
          <p>
            Bank application Deposit - Withdraw - Transfer money between users.
          </p>
        </div>
        <div className="LinkItemBox">
          <a href="https://thatakopittayakomschoolclub.onrender.com/">
            School Club Project
          </a>
          <p>made website for student join club You may have to wait a bit.</p>
        </div>
        <div className="LinkItemBox">
          <a href="https://capitals-quiz-vasawat.netlify.app/">Country Quiz</a>
          <p>A quiz game where you have to guess the country.</p>
        </div>
        <div className="LinkItemBox">
          <a href="https://blogsprojectvasawat.netlify.app/">MyBlog</a>
          <p>Just blog</p>
        </div>
        <div className="LinkItemBox">
          <a href="https://pokedex-bbegg.netlify.app/">My PokeDex</a>
          <p>PokeDex</p>
        </div>
      </div>
      <div className="rightBox">
        {/* <div className="LinkItemBox">
          <Link to="/angela">Angela course</Link>
        </div> */}
      </div>
    </section>
  );
}
