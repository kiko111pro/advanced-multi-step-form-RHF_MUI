import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Drawer from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const mobileWidth = useMediaQuery("(max-width: 600px)");
  return (
    <Grid
      p={2}
      sx={{ bgcolor: "primary.main" }}
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid container alignItems="center" item xs={mobileWidth ? 5 : 3}>
        {mobileWidth && <Drawer />}
        <img
          alt="logo"
          src="https://static-cse.canva.com/_next/static/assets/realityaustin.file.398763fc3fe7f9a755eaaf9a1ba0956b.png"
          height="40px"
        />
      </Grid>
      {!mobileWidth && (
        <Grid item container justifyContent="space-around" xs={6}>
          <Typography color="white">
            <b>Development</b>
          </Typography>
          <Typography color="white">
            <b>Management</b>
          </Typography>
          <Typography color="white">
            <b>Marketing</b>
          </Typography>
        </Grid>
      )}
      <Grid container justifyContent="flex-end" item xs={3}>
        <Avatar sx={{ bgcolor: "secondary.main" }}>N</Avatar>
      </Grid>
    </Grid>
  );
}

export default Header;
