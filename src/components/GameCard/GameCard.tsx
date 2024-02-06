import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Games } from "../../interfaces/Games";
import PlatfromIcon from "../PlatformIcon/PlatformIcon";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  const platfromIconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    linux: FaLinux,
  };
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt={game.name}
        height="200"
        image={game.background_image}
      />
      <CardContent
        sx={{
          height: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h6" fontWeight="600" component="div">
          {game.name}
        </Typography>
        <PlatfromIcon
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardContent>
    </Card>
  );
};

export default GameCard;
