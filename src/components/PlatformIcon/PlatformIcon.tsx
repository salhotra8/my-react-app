import { Icon, Stack } from "@mui/material";
import { Platform } from "../../interfaces/Games";
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
import { IconType } from "react-icons";

interface PlatformProps {
  platforms: Platform[];
}

const PlatfromIcon = ({ platforms }: PlatformProps) => {
  const platformIconMap: { [key: string]: IconType } = {
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
    <>
      <Stack direction="row" spacing={1} alignSelf="center">
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            component={platformIconMap[platform.slug]}
            color="secondary"
            sx={{ fontSize: 21 }}
          />
        ))}
      </Stack>
    </>
  );
};

export default PlatfromIcon;
