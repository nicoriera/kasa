import logoWhite from "../assets/logo_white.svg";

function Footer() {
  return (
    <div className=" p-4 fixed bottom-0 w-full flex flex-col gap-4 bg-black text-white justify-center items-center">
      <img src={logoWhite} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export { Footer };
