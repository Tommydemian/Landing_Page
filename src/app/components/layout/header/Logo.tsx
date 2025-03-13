import Link from "next/link";
import { BrandLogo } from "../../brand/BrandLogo";
// import { BrandLogo } from "../../brand/BrandLogo";
// import { Codepen } from "lucide-react";
export const Logo = () => {
    return (
        <Link className="flex items-center" href="/">
            <BrandLogo />
        </Link>
    );
};
