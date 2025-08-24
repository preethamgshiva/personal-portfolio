function TerminalPortfolio() {
  return (
    <div className="relative h-fit w-full mt-2 py-4 px-4 bg-white text-black font-medium rounded-lg hover:bg-black hover:text-white animate-outer-glow">
      <a
        href="https://preetham-terminal.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className="flex flex-col items-center text-center"
      >
        {/* Image above text */}
        <img
          src="/terminalPortfolio.png"
          alt="Terminal Portfolio"
          className="max-w-md h-auto mb-3"
        />

        {/* Heading */}
        <h3 className="text-lg font-semibold">
          Click to view my Terminal Style Portfolio
        </h3>
      </a>
    </div>
  );
}

export default TerminalPortfolio;
