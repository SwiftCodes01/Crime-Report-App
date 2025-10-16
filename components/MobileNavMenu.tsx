import Link from "next/link";
interface MobileMenu {
  isOpen: boolean;
  toggle: () => void;
}

export default function MobileNavMenu({ isOpen, toggle }: MobileMenu) {
  if (!isOpen) return null;

  return (
    <> 
      <nav className=" fixed top-0 right-0 z-50 h-screen  text-white w-64 p-6 shadow-xl bg-zinc-900 transition-all backdrop-blur-xl">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end">
            <button
              className="md:hidden text-zinc-400 hover:text-white transition-colors"
              onClick={() => toggle()}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <Link
            href={"/submit-report"}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Submit Report
          </Link>
          <Link
            href={"/track-report"}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Track Report
          </Link>
          <Link
            href={"/how-it-works"}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href={"/resources"}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Resources
          </Link>
        </div>
      </nav>
    </>
  );
}
