import {LinkIcon} from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer
      className="w-full flex justify-center items-center bg-zinc-900 text-zinc-300 text-sm py-3 font-medium"
    >
      
      <a
        href="https://www.linkedin.com/in/hiagoisoppo/"
        target="_blank"
        className="flex justify-center items-center gap-2 cursor-pointer
        hover:font-black hover:text-green-500 transition-all duration-300"
      >
        <LinkIcon className="w-6"/>
        Desenvolvido por Hiago Isoppo
      </a>
    </footer>
  )
}

export default Footer;