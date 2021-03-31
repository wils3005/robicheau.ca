function main(): JSX.Element {
  return (
    <header className="flex bg-pink-400">
      <nav className="flex items-center justify-around p-2 w-full">
        <a className="font-black text-grey-800" href="#">
          Nicole
          <br />
          ROBICHEAU
        </a>
        <a className="text-white" href="#meet-nicole">
          Meet Nicole
        </a>
        <a className="text-white" href="#what-i-care-about">
          Action Items
        </a>
        <a className="text-white" href="#contact-me">
          Contact
        </a>
        <a className="text-white" href="#sign-up-for-updates">
          <div className="bg-gray-800 px-4 py-2 rounded-lg">Sign Up</div>
        </a>
      </nav>
    </header>
  );
}

export default main;
