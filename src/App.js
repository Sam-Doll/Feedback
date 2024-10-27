import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="one"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwOqgKpxtLPgxcqgv7P96kf-j7OM9jycRHg&s"
          class="image"
        ></img>
        </div>
        <div class="two"><h1>FEEDBACK</h1></div>
        <div class="head-btns">
          <button class="head-btn">LOGOUT</button>
          <button class="head-btn">BACK</button>
        </div>
      </header>

      <br></br>
      <p class="styled-paragraph" style={{ textAlign: "center" }}>
        How would you rate your website experience?
      </p>
      <div class="rating-container">
        <div class="rating-option" data-rating="excellent">
          <span class="emoji">😊</span>
          <span class="label">Excellent</span>
        </div>
        <div class="rating-option" data-rating="good">
          <span class="emoji">🙂</span>
          <span class="label">Good</span>
        </div>
        <div class="rating-option" data-rating="ok">
          <span class="emoji">😐</span>
          <span class="label">OK</span>
        </div>
        <div class="rating-option" data-rating="bad">
          <span class="emoji">🙁</span>
          <span class="label">Bad</span>
        </div>
        <div class="rating-option" data-rating="worst">
          <span class="emoji">😠</span>
          <span class="label">Worst</span>
        </div>
      </div>
      <br></br>
      <p class="styled-paragraph">
        Please share in detail what we can improve in our website experience
      </p>

      <div class="feedback-container">
        <textarea
          class="feedback-input"
          placeholder="Write something..."
        ></textarea>
      </div>

      <button class="submit-end">SUBMIT</button>
      <br></br>
    </div>
  );
}

export default App;
