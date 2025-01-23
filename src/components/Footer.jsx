import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-2 py-7 md:py-10 flex justify-between items-center">
        <div className="text-2xl font-bold p-5">BLOG_GER</div>
        <div>
          <ul className="flex gap-5">
            <li className="link-hover">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="link-hover">
              <Link href={"/profile"}>PROFILE</Link>
            </li>
          </ul>
        </div>
        <div>
            <h3 className="text-xl font-medium">Contact info</h3>
            <ul className="*:link-hover">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
