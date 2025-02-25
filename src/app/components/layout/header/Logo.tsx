import Link from "next/link";
import { Codepen } from "lucide-react";
export const Logo = () => {
    return (
        <Link className="flex items-center" href="/">
            <Codepen />
        </Link>
    );
};
