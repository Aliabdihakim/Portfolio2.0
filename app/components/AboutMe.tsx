import React from "react";
import CardContainer from "./CardContainer";
import {
  GraduationCap,
  Info,
  MapPin,
  ReadCvLogo,
  User,
} from "@phosphor-icons/react/dist/ssr";
import IconDescription from "./IconDescription";

const AboutMe = () => {
  return (
    <CardContainer>
      <div className="flex gap-4 items-center p-4 mb-4">
        <Info size={20} weight="bold" />
        <p className="text-base font-light">About me</p>
      </div>

      <div className="space-y-8 px-6">
        <IconDescription
          icon={<User size={24} weight="fill" />}
          iconGap={2}
          title="Ali Abdihakim"
          titleSize="base"
        />
        <IconDescription
          icon={<MapPin size={24} weight="fill" />}
          iconGap={2}
          title="Sweden, Stockholm"
          titleSize="base"
        />
        <IconDescription
          icon={<GraduationCap size={24} weight="fill" />}
          iconGap={2}
          title="M.sc Compter Science (KTH)"
          titleSize="base"
        />
        <IconDescription
          icon={<ReadCvLogo size={24} weight="fill" />}
          iconGap={2}
          title="5+ years of experience"
          titleSize="base"
        />
      </div>
    </CardContainer>
  );
};

export default AboutMe;
