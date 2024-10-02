import Image from "next/image";
import PopulationChart from "@/components/PopulationChart";
import { Box, Typography, List, ListItem, Button } from "@mui/material";

interface PopulationCount {
  year: number;
  value: number;
}

interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

interface Country {
  flagUrl: string;
  borderCountries: { countryCode: string; commonName: string }[];
  populationData: PopulationData;
}

interface Props {
  country: Country;
}

const CountryInfo: React.FC<Props> = ({ country }) => {
  return (
    <Box
      sx={{
        padding: "50px",
        maxWidth: "800px",
        margin: "20px auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        bgcolor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "35px",
        }}
      >
        <Typography variant="h3" component="h3" gutterBottom>
          <b>{country.populationData.country.toUpperCase()}</b>
        </Typography>
        <Image
          src={country.flagUrl}
          alt={`${country.populationData.country} flag`}
          width={320}
          height={190}
          priority
          property="Wikipedia"
        />
      </Box>
      <Box sx={{ paddingBottom: "20px", borderBottom: "1px solid #ccc" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Border Countries
        </Typography>
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {country.borderCountries.map((border) => (
            <ListItem
              key={border.countryCode}
              sx={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              <Button
                href={`/country-info/${border.countryCode}`}
                variant="outlined"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  padding: {
                    xs: "10px",
                    sm: "auto",
                  },
                }}
              >
                {border.commonName}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Population Over Time
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "300px",
          }}
        >
          <PopulationChart
            populationData={country.populationData.populationCounts}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CountryInfo;
