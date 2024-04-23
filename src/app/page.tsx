import { CardWithForm } from '@/components/FrontCard';
import { CarouselDemo } from '@/components/Carousel';
import { DarkModeToggle } from '@/components/ModeToggle';
import Image from 'next/image';
import { PasswordForm } from '@/components/BackCard';
import { InputForm } from '@/components/AuthForm';

export default function Home() {
  return (
    <>
      <DarkModeToggle />
      {/* <CardWithForm/> 
   <PasswordForm/> */}
      <InputForm />
      <CarouselDemo />
    </>
  );
}
