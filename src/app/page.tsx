import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Image from "next/image";
import NsutLogo from "@/components/static/nsut-logo.png";
import AlumniGroup from "@/components/static/alumni-group.png";

export default function Home() {
  return (
    <>
      <div className="home-nav">
        <Image src={NsutLogo} height={50} alt=""></Image>
      </div>


      <Navigation></Navigation>
      <main className="home">
        <div className="banner">
          <div className="overlay">
            <div className="title">WELCOME TO NALUM</div>
          </div>
        </div>
      </main>
      
      <main className="about">
        <div className="table">
          <div className="col">
            <Image
              alt=""
              src={AlumniGroup}
              height="0"
              width="0"
              style={{ width: "100%", height: "auto" }}
            ></Image>
          </div>
          <div className="col">
            <h1>Welcome, alumni, students, and friends of NSUT!</h1>
            <p>
              Whether you&apos;re here to reconnect, expand your professional
              network, support NSUT&apos;s growth, or explore the impact of
              giving back, you&apos;re in the right place. Our portal offers you
              a seamless way to engage with the vibrant NSUT community, get
              involved with alumni activities, and discover opportunities to
              contribute.
            </p>
            <p>
              For those looking to give back, we&apos;ll guide you on how to
              make a difference, where your support matters most, and the legacy
              it leaves behind. If you&apos;re here to reconnect, explore our
              network, career services, and upcoming alumni events. Discover the
              NSUT that inspires you.
            </p>
            <p>
              Alumni, students, and friends like you fuel NSUT&apos;s journey
              toward greater heights. Join us and stay proud to be part of the
              NSUT family.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
