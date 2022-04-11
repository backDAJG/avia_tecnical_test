import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Search, Hotel, Star } from "@mui/icons-material";

export default () => {
  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
      <Grid md={3} item sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ p: 2 }}>
          <Typography
            variant="subtitle1"
            color="gray"
            fontSize={23}
            fontWeight="bold"
          >
            Filtros
          </Typography>
          <Paper elevation={5}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Search sx={{ m: 2, fontSize: 25 }} color="gray" />
              <Typography>Nombre del Hotel</Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 6 }}>
              <Box sx={{ display: "flex" }}>
                <Hotel sx={{ mr: 1, fontSize: 30 }} />
                <TextField placeholder="Hotel" variant="standard" />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Star sx={{ m: 2, fontSize: 25 }} color="gray" />
              <Typography>Estrellas</Typography>
            </Box>
            <Divider />
            <Box sx={{ m: 2 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Todas las Estrellas"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Star sx={{ color: "#efb810" }} />}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                    </>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                    </>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                    </>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                      <Star sx={{ color: "#efb810" }} />
                    </>
                  }
                />
              </FormGroup>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid md={9} item mt={2} pr={2}>
        <Paper elevation={5} sx={{ p: 2, display: "flex" }}>
          <img src="http://localhost:3001/static/2a5bb415_b.jpg" />
          <Box ml={3}>
            <Typography variant="h5" color="#255ca7" fontWeight="bold">
              Hotel Stefanos
            </Typography>
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
          </Box>
        </Paper>
        <Paper elevation={5} sx={{ p: 2, display: "flex", mt: 2 }}>
          <img src="http://localhost:3001/static/2a5bb415_b.jpg" />
          <Box ml={3}>
            <Typography variant="h5" color="#255ca7" fontWeight="bold">
              Hotel Stefanos
            </Typography>
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
          </Box>
        </Paper>
        <Paper elevation={5} sx={{ p: 2, display: "flex", mt: 2 }}>
          <img src="http://localhost:3001/static/2a5bb415_b.jpg" />
          <Box ml={3}>
            <Typography variant="h5" color="#255ca7" fontWeight="bold">
              Hotel Stefanos
            </Typography>
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
            <Star sx={{ color: "#efb810" }} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
