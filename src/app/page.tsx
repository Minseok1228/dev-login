import { CardWithForm } from "@/components/FrontCard";
import { CarouselDemo } from "@/components/Carousel";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { PasswordForm } from "@/components/BackCard";

export default function Home() {
  return (
   <>
   <ModeToggle/>
   {/* <CardWithForm/>
   <PasswordForm/> */}
   <CarouselDemo/>
   </>
  );
}
