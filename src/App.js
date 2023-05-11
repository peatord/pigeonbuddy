import { useState } from "react";
import { UserWidget, BecomePenpalWidget } from "./UserWidget.js";
import { AddPenPalButton, NewPenPalButton } from "./Button.js";
import User from "./user.js";
import "./App.css";
import userData from "./data/users.json";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const length = userData.users.length;

  async function getPenpal() {
    const userNumber = getRandomInt(0, length);
    if (appState === "init") {
      setAppState("fetchedUser");
    }
    setPenpalState(
      new User(
        userData.users[userNumber].displayname,
        userData.users[userNumber].email,
        userData.users[userNumber].interests,
        userData.users[userNumber].note
      )
    );
    setAppState("fetchedUser");
  }
  async function becomePenpalCallback() {
    setAppState("becomePenpal");
  }

  const [penpalState, setPenpalState] = useState({});
  const [appState, setAppState] = useState("init");

  return (
    <div className="wrapper">
      <div className="App">
        <div className="header">
          <a
            href="https://github.com/peatord/pigeonbuddy"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/icons/github-mark.png" alt="github Logo" />
          </a>
          <a
            href="https://fosstodon.org/@TheLinuxGoblin"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/icons/mastodon.svg" alt="Mastodon Logo" />
          </a>
        </div>
        {appState === "init" && <div className="height50"></div>}

        <div className="center">
          <p>
            Hey there! Are you tired of the modern world's instant messaging and
            social media, where everything is about short-lived connections and
            quick replies? Me too! That's why I created this email penpal
            website. With this app, you can find amazing penpals from all over
            the world who share your interests and passions, and exchange
            thoughtful, meaningful messages with them. So, if you're ready to
            break away from the fast-paced digital world and start a genuine
            connection with someone, join me and start your penpal journey
            today!
          </p>
          {appState === "init" && (
            <div className="row">
              <NewPenPalButton func={getPenpal} />
              <AddPenPalButton func={becomePenpalCallback}/>
            </div>
          )}

          {appState === "fetchedUser" && (
            <>
              <div className="row">
                <NewPenPalButton func={getPenpal} />{" "}
                <AddPenPalButton func={becomePenpalCallback} />
              </div>{" "}
              <div className="height20"></div>
              <UserWidget user={penpalState} />
              <div className="height50"></div>
            </>
          )}
          {appState === "becomePenpal" && (
            <>
              <div className="row">
                <NewPenPalButton func={getPenpal} />{" "}
                <AddPenPalButton func={becomePenpalCallback} />
              </div>{" "}
              <div className="height20"></div>
              <BecomePenpalWidget />
              <div className="height50"></div>
            </>
          )}
        </div>

        <footer className="footer">
          The code for this site is registered under the GPLv3 license, and the
          rest of the content is licensed under the CC-BY-SA
        </footer>
      </div>
    </div>
  );
}

export default App;
