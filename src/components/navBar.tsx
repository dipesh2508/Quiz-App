const NavBar = () => {
  return (
    <div
      className="grid h-44 w-full place-content-center 
    bg-gradient-to-r  from-pink-400 to-orange-400
    text-center font-serif text-6xl font-semibold text-slate-100 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
    >
      React Quiz App
      <div className="mt-4 font-sans text-xl text-slate-200">
        Test Your Knowledge
      </div>
    </div>
  );
};

export default NavBar;
