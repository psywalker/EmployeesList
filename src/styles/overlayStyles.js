export const overlayStyles = () => (
  {
    wrapper: {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      padding: "0",
      transition: "all .3s",
      fontFamily: "Roboto",
      fontSize: "30px"
    },
    overlay: {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      display: "flex",
      textAlign: "center",
      fontSize: "1.2em",
      color: "#fff",
      background: "rgba(0,0,0,0.7)",
      zIndex: 800,
      transition: "opacity 500ms ease-in",
      opacity: 1
    }
  }
)