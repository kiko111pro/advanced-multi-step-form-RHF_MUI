import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container direction="column">
      <Grid item container sx={{ mb: 1 }}>
        <Header />
      </Grid>
      <Grid item>
        <Form />
      </Grid>
    </Grid>
  );
}

export default App;
