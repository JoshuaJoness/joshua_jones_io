import React from "react"
import ReactPlayer from "react-player"

const ZenChat = ({ mobile }) => (
  <div className={mobile ? "zenChatContainerMobile" : "zenChatContainer"}>
    <div style={{ padding: 100 }}>
      <span
        className={mobile ? "titleMobile" : "title"}
        style={
          mobile
            ? { width: "fit-content", marginBottom: 60 }
            : { color: "#333", marginBottom: 100 }
        }
      >
        ZenChat
      </span>
      <ReactPlayer
        className="react-player fixed-bottom"
        url="/videos/zenChat.mov"
        width="60vw"
        height="100%"
        controls={true}
        playing={true}
        loop={true}
        style={{ display: "block", margin: "auto" }}
        muted
      />
      <p
        className={mobile ? "descriptionMobile" : "description"}
        style={{ color: "#333", width: "60vw", margin: "75px auto" }}
      >
        A chat app built with{" "}
        <span style={{ color: "yellowGreen" }}>React</span>,{" "}
        <span style={{ color: "yellowGreen" }}>Node</span>, and{" "}
        <span style={{ color: "yellowGreen" }}>web sockets</span>. Join one of
        our many rooms or create your own. <br />
        🧘‍♂️
        <br />
        <br />
        <span style={{ color: "#333" }}>Visit: </span>
        <a
          className={mobile ? "zen-chat-link-mobile" : "zen-chat-link"}
          href="https://zenchaat.herokuapp.com/"
          target="_blank"
        >
          https://zenchaat.herokuapp.com/
        </a>
      </p>
    </div>
  </div>
)

export default ZenChat
