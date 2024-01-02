import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full h-20 lg:h-[12vh] shadow-navbarShadow sticky top-0 z-50 bg-bodyColor py-4 px-6">
      <nav className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex gap-4 text-[18px]'>
            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-linkColor cursor-pointer duration-300'>
              <li>Home</li>
            </Link>
            <Link href="#features" className='flex items-center gap-1 font-medium text-textDark hover:text-linkColor cursor-pointer duration-300'>
              <li>Features</li>
            </Link>
            <Link href="#how-it-works" className='flex items-center gap-1 font-medium text-textDark hover:text-linkColor cursor-pointer duration-300'>
              <li>How it works</li>
            </Link>
            <Link href="#singup" className='flex items-center gap-1 font-medium text-textDark hover:text-linkColor cursor-pointer duration-300'>
              <li>Sign Up/Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;