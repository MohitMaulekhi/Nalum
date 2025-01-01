import NsutLogo from "@/components/static/nsut-logo.png";
import LinkedinIcon from "@/components/static/linkedin-icon.png";
import InstagramIcon from "@/components/static/instagram-icon.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="cell">
        <Link href="/">
          <Image src={NsutLogo} height={50} width={50} alt = ""></Image>
        </Link>
      </div>
      <div className="cell long">
        <div className="cell">
          <Link href="mailto:admin@alumninet.in">admin@alumninet.in</Link>
        </div>
        <div className="cell">
          <a className="icons" href="https://www.instagram.com/nalum.nsut/">
            <Image src={InstagramIcon} height={20} width={20} alt = ""></Image>
          </a>
          <a
            className="icons"
            href="https://www.linkedin.com/company/alumninet-in/"
          >
            <Image src={LinkedinIcon} height={30} width={30} alt = ""></Image>
          </a>
        </div>
      </div>
    </footer>
  );
}
