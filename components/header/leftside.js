import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import CableIcon from "@mui/icons-material/Cable";
import DiamondIcon from "@mui/icons-material/Diamond";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import CategoryIcon from "@mui/icons-material/Category";

import SidebarMenuItem from "./SidebarMenuItem";

export default function Leftside() {
  return (
    <div className="hidden md:inline md:w-[40%] lg:w-[20%]">
      <div className="items-start bg-white p-2 h-[100%] rounded-md shadow-2xl">
        <SidebarMenuItem
          link="supermarket"
          text="Supermarket"
          Icon={LocalGroceryStoreIcon}
          active
        />
        <SidebarMenuItem
          link="healthbeauty"
          text="Health & Beauty"
          Icon={MedicationLiquidIcon}
        />
        <SidebarMenuItem
          link="homeoffice"
          text="Home & Office"
          Icon={HomeWorkIcon}
        />
        <SidebarMenuItem
          link="appliances"
          text="Appliances"
          Icon={MicrowaveIcon}
        />
        <SidebarMenuItem
          link="phonestablets"
          text="Phones & Tablets"
          Icon={PhoneAndroidIcon}
        />
        <SidebarMenuItem
          link="computing"
          text="Computing"
          Icon={ComputerIcon}
        />
        <SidebarMenuItem
          link="electronics"
          text="Electronics"
          Icon={CableIcon}
        />
        <SidebarMenuItem link="fashion" text="Fashion" Icon={DiamondIcon} />
        <SidebarMenuItem
          link="babyproducts"
          text="Baby Products"
          Icon={ChildFriendlyIcon}
        />
        <SidebarMenuItem link="gaming" text="Gaming" Icon={SportsEsportsIcon} />
        <SidebarMenuItem
          link="sportinggoods"
          text="Sporting Goods"
          Icon={DownhillSkiingIcon}
        />
        <SidebarMenuItem
          link="othercategories"
          text="Other Categories"
          Icon={CategoryIcon}
        />
      </div>
    </div>
  );
}
