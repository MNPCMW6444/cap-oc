import ProvideMainServer from "@caphub-group/mainserver-provider";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography>Main Server:</Typography>
      <ProvideMainServer>
        <Typography>Main Server is Alive </Typography>
      </ProvideMainServer>
    </>
  );
}

export default App;
