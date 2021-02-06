import { Grid } from "@material-ui/core";
import NewsWidget from "./NewsWidget";
import TrendingWidget from "./TrendingWidget";
const Home = () => {
  return (
    <Grid container>
      <Grid item md lg />
      {/* Main content start */}
      <Grid item container direction="row" md={8} lg={6} spacing={0}>
        <Grid item container direction="column" xs={12} md={8} lg={8}>
          <NewsWidget />
          {/* This is where news will go */}
        </Grid>
        <Grid item container direction="column" xs={12} md={8} lg={4}>
          <TrendingWidget />
        </Grid>
      </Grid>
      {/* Main content end */}
      <Grid item md lg />
    </Grid>
  );
};

export default Home;
