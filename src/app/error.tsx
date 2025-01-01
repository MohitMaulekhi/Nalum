"use client";

import Navigation from "@/components/navigation";
import NsutLogo from "@/components/static/nsut-logo-black.png";
import ErrorBanner from "@/components/static/error-banner.png";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "@/components/footer";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="error-nav">
        <Image src={NsutLogo} height={50} alt = ""></Image>
      </div>
      <Navigation></Navigation>
      <div className="error">
        <div className="table">
          <div className="col">
            <Image
              src={ErrorBanner}
              height="0"
              width="0"
              alt = ""
              style={{ width: "100%", height: "auto" }}
            ></Image>
          </div>
          <div className="col">
            <h1>Some Error Occured!!!</h1>
            <p className="sub">But do not worry</p>
            <p>
              Just follow the links on the navigation to find the place you are
              looking for
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
