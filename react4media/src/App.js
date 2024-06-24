// import logo from "./logo.svg";
import vijay from "./images/kushipposter.jpeg";
import audio1 from "./audio/01.NaRojaNuvve.mp3";
import audio2 from "./audio/02.Aradhya.mp3";
import audio3 from "./audio/03.Kushi.mp3";
import audio4 from "./audio/04.YedhakiOkaGaayam.mp3";
import audio5 from "./audio/05.OsiPellama.mp3";
import trailer from "./video/KushiTrailer.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TOLLYWOOD MOVIES</h1>
      <h2>THE FAMILY STAR </h2>
      <div className="movie1">
        <div>
          <img
            className="image"
            src="https://cdn.123telugu.com/content/wp-content/uploads/2023/11/family-star.jpg"
            alt=""
          ></img>
        </div>
        <div className="audioDiv">
          <audio
            className="audio"
            src="./audio/01.Nandanandanna.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="./audio/02.Kalyani Vaccha Vacchaa.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="./audio/03.Madhuramu Kadha.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="./audio/04.Dekhore Dekho.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="./audio/05.DonT Judge Me.mp3"
            controls
          ></audio>
        </div>

        <div className="video">
          <video
            className="video"
            src="./video/TheFamilyStarMovieTrailer.mp4"
            controls
            autoPlay
            muted
          ></video>
        </div>
      </div>
      <br></br>

      <h2>DEAR COMRADE </h2>
      <div className="movie1">
        <div>
          <img
            className="image"
            src="https://services.brninfotech.com/tws/media2/posters/Dear Comrade.jpg"
            alt=""
          ></img>
        </div>
        <div className="audioDiv">
          <audio
            className="audio"
            src="https://services.brninfotech.com/tws/media2/songs/DearComrade/01 - Nee Neeli Kannullona.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="https://services.brninfotech.com/tws/media2/songs/DearComrade/02 - Kadalalle.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="https://services.brninfotech.com/tws/media2/songs/DearComrade/03 - Gira Gira Gira.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="https://services.brninfotech.com/tws/media2/songs/DearComrade/04 - The Canteen Song.mp3"
            controls
          ></audio>
          <audio
            className="audio"
            src="https://services.brninfotech.com/tws/media2/songs/DearComrade/05 - Comrade Anthem.mp3"
            controls
          ></audio>
        </div>

        <div className="video">
          <video
            className="video"
            src="https://services.brninfotech.com/tws/media2/trailers/DearComradeTeluguTeaser.mp4"
            controls
            autoPlay
            muted
          ></video>
        </div>
      </div>
      <br></br>

      <h2>KUSHI</h2>
      <div className="movie1">
        <div>
          <img className="image" src={vijay} alt=""></img>
        </div>
        <div className="audioDiv">
          <audio className="audio" src={audio1} controls></audio>
          <audio className="audio" src={audio2} controls></audio>
          <audio className="audio" src={audio3} controls></audio>
          <audio className="audio" src={audio4} controls></audio>
          <audio className="audio" src={audio5} controls></audio>
        </div>

        <div className="video">
          <video
            className="video"
            src={trailer}
            controls
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
}

export default App;
