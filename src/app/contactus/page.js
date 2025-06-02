"use client";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContactUs = () => {
  const route = usePathname();
  console.log(route);
  return (
    <>
      <div className="contact_us">
        <span className={`${route !== "/contactus" && "hidden"}`}>
          {" "}
          <Link href="/">
            <FaCircleArrowLeft size={40} />
          </Link>
        </span>
        <img src={"/contactus.png"} />
        <div>
          <a className="call_us" href="tel:+91-99407-29372">
            <FaSquarePhone /> - +91 99407 29372{" "}
          </a>
          <a className="email_chat" href="mailto:karthikrajan9940@gmail.com">
            <MdEmail /> - karthikrajan9940@gmail.com
          </a>
          <p className="address">
            <FaMapMarkerAlt /> Chennai West Tambaram
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
