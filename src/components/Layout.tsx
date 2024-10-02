import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  Theme,
  CircularProgress,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontSize: isMobile ? "1rem" : "1.5rem" }}
          >
            DevelopsToday
          </Typography>
          <Link href="/" passHref>
            <Typography
              color="secondary"
              sx={{
                color: "white",
                fontSize: isMobile ? "0.75rem" : "1rem",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container sx={{ padding: isMobile ? 2 : 4 }}>{children}</Container>
      )}
    </>
  );
};

export default Layout;
