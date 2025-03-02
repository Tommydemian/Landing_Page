import { MainHeading } from "../layout/ui/MainHeading";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "../layout/ui/Link";

interface Props {
  headingText: string;
  subheadingText: string;
  n: number;
  logo?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const SectionHeading = ({
  headingText,
  n,
  subheadingText,
  logo,
  buttonLink,
  buttonText,
}: Props) => {
  return (
    <div
      className={cn(
        "services-heading__wrapper relative flex w-full flex-col items-center justify-center py-[3.125em] gap-10",
        `service-heading__wrapper-${n}`
      )}
    >
      <div>
        {logo && <Image src={logo} width={50} height={50} alt="Contact Us" />}
      </div>
      <div className="relative z-10">
        <MainHeading>{headingText}</MainHeading>
        <p className="fluid-body-fs max-w-[none] text-center text-body-clr">
          {subheadingText}
        </p>
      </div>
      <div>{buttonLink && <Link linkUrl={buttonLink}>{buttonText}</Link>}</div>
    </div>
  );
};
