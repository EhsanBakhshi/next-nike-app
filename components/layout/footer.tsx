import { footerLinks, socialMedia } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import { copyrightSign } from "@/public/assets/icons";
import { footerLogo } from "@/public/assets/images";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={footerLogo}
              alt={"footer-logo"}
              width={150}
              height={46}
            />
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((media, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </Link>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt={"copyright-sign"}
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>
            {new Date().getFullYear()}. Designed and developed by{" "}
            <a
              href="https://github.com/EhsanBakhshi"
              className="text-coral-red"
              target="_blank"
            >
              Ehsan Bakhshi
            </a>
            . All rights reserved.
          </p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
