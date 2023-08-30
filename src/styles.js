import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  title: {
    letterSpacing: "0.1rem",
    lineHeight: "1.25",
    marginBottom: "0.15rem",
    fontSize: "2rem",
    textAlign: "center",
  },
  form: {
    width: "100vw",
    maxWidth: "1170px",
    margin: "0 auto",
    marginTop: "3rem",
    marginButtom: "3rem",
    textAlign: "-webkit-center",
  },
  error: {
    color: "#F93154",
    paddingTop: "0.5rem",
    fontSize: "2.15rem",
  },
  section: {
    width: "100vw",
    height: "100%",
    maxWidth: "1170px",
    margin: "4rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
}));
