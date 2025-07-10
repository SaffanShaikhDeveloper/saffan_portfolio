import { useState } from "react";

const CopyButtonEmail = () => {
  // Function to copy email address to clipboard
  const [copied, setCopied] = useState(false); // this copied state will be used to show response message on button after copying email address

  const email = "shaikhsaffan088@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      {copied ? (
        <p className="flex items-center justify-center gap-2">
          <img src="assets/copy-done.svg" className="w-5" alt="copy icon" />
          Email has Copied
        </p>
      ) : (
        <p className="flex items-center justify-center gap-2">
          <img src="assets/copy.svg" className="w-5" alt="copy-icon" />
          Copy Email Address
        </p>
      )}
    </button>
  );
};

export default CopyButtonEmail;
