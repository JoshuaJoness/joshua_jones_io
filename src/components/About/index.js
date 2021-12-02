import React from "react"

const About = ({ mobile }) => (
  <div
    id="about"
    style={{
      marginTop: "-100vh",
      /* TODO debug  */ backgroundColor: "#000",
      height: "125vh",
      color: "grey",
    }}
  >
    <div className={mobile ? "aboutContainerMobile" : "aboutContainer"}>
      <span
        className={mobile ? "titleMobile" : "title"}
        style={{
          color: "pink",
          marginBottom: 20,
          fontSize: 50,
          marginTop: 150,
        }}
      >
        Who am I?
      </span>
      {/* {mobile ? 
                    <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto 20px', fontSize: 22 }}>
                    <p style={{ alignSelf: 'center' }}>A<br/><span className="aboutHighlight" style={{ fontSize: 22 }}>creative <br/>fullstack <br/>developer 👨‍💻&nbsp;</span></p>
                </div>
                    :  */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={
            mobile
              ? { textAlign: "center", marginTop: 20 }
              : { alignSelf: "center" }
          }
        >
          A{" "}
          <span
            className="aboutHighlight"
            style={
              mobile
                ? {
                    lineHeight: 2,
                    margin: "auto",
                    display: "block",
                    fontSize: 42,
                  }
                : { fontSize: 42 }
            }
          >
            creative fullstack developer. 👨‍💻&nbsp;
          </span>
        </p>
        <p
          style={
            mobile
              ? { lineHeight: 2, textAlign: "center" }
              : { alignSelf: "center", textAlign: "center" }
          }
        >
          Understands{" "}
          <span className="aboutHighlight">business needs.&nbsp;</span>&nbsp;
          <br />
          Takes<span className="aboutHighlight">&nbsp;ownership&nbsp;</span>
          .&nbsp;
          <br />
          Builds with <span className="aboutHighlight">empathy&nbsp;</span>.
          <br />
        </p>
      </div>
      {/* } */}
    </div>
  </div>
)

export default About
