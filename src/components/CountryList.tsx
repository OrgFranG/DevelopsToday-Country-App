import Link from "next/link";
import { Typography, List, ListItem, Paper, Button } from "@mui/material";

interface Country {
  countryCode: string;
  name: string;
}

interface Props {
  countries: Country[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "800px", margin: "20px auto" }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        LIST OF COUNTRIES
      </Typography>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "20px",
          "@media (min-width: 600px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (min-width: 900px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          "@media (min-width: 1200px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
          },
          "@media (min-width: 1500px)": {
            gridTemplateColumns: "repeat(5, 1fr)",
          },
        }}
      >
        {countries.map((country) => (
          <ListItem
            component="div"
            key={country.countryCode}
            sx={{ padding: 0 }}
          >
            <Button
              component={Link}
              href={`/country-info/${country.countryCode}`}
              passHref
              variant="contained"
              sx={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                color: "white",
              }}
            >
              <b>{country.name}</b>
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CountryList;
