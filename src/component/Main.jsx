import "./Main.css";
import { assets } from "../assets/assets";
import Card from "./Card";
import { useContext } from "react";
import { UserContext } from "../context/context";
import ReactMarkdown from "react-markdown";


const Main = () => {
  const { query, setquery, handleClick, show, history, loading, selected } = useContext(UserContext);
const activeChat = selected ?? history[0];

  return (
    <div className="main">
      <nav className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="User" />
      </nav>

      <div className="main-container">
        {/* HOME SCREEN */}
        {!show && !loading && (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>

            <div className="cards">
              <Card para="Suggest some places to visit in India." imgsrc={assets.compass_icon} />
              <Card para="Explain photosynthesis in simple terms." imgsrc={assets.message_icon} />
              <Card para="How to create a responsive navbar?" imgsrc={assets.bulb_icon} />
              <Card para="Essential skills for front-end developers?" imgsrc={assets.code_icon} />
            </div>
          </>
        )}

        {/* LOADER */}
        {loading && (
          <div className="result">
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              <span className="gemini-loader">Thinking</span>
            </div>
          </div>
        )}

        {/* RESULT */}
        {show && activeChat && history.length > 0 && (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="User" />
              <p>{history[0].input}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              <ReactMarkdown>
                {history[0].output}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* INPUT */}
        <div className="main-bottom">
          <form
            className="search-box"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <input
              type="text"
              placeholder="Enter the prompt here"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />

            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img src={assets.send_icon} alt="Send" onClick={handleClick} />
            </div>
          </form>

          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people.
              Double-check responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
