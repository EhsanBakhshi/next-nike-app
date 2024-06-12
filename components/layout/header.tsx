import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src={"/assets/images/header-logo.svg"}
            width={130}
            height={29}
            alt={"header logo"}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src={"/assets/icons/hamburger.svg"}
            width={25}
            height={25}
            alt={"menu"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
