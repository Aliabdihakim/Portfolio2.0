import React, { useState } from "react";
import CardContainer from "./CardContainer";
import {
  Envelope,
  GithubLogo,
  Link as ConnectLink,
} from "@phosphor-icons/react/dist/ssr";
import IconDescription from "./IconDescription";
import Link from "next/link";

const Connect = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ali.abdihakim.ali1@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <CardContainer>
      <div className="flex gap-4 items-center p-4 mb-4">
        <ConnectLink size={20} weight="bold" />
        <p className="text-base font-light">Connect</p>
      </div>
      <div className="space-y-8 px-6">
        <Link
          href="https://github.com/Aliabdihakim"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDescription
            icon={<GithubLogo size={24} weight="fill" />}
            iconGap={2}
            title="GitHub"
            titleSize="base"
          />
        </Link>
        <div onClick={handleCopyEmail} className="cursor-pointer">
          <IconDescription
            icon={<Envelope size={24} />}
            iconGap={2}
            title={emailCopied ? "Email copied to clickboard!" : "Email"}
            titleSize="base"
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Connect;
