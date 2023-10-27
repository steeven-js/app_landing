import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id='Hero' className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-40 lg:bold-64 text-green-50">Explorez la Nature Médicinale</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          "Découvrez le monde des plantes médicinales avec mon application pratique. Identifiez, apprenez et tirez parti des pouvoirs curatifs des plantes médicinales."
        </p>

        <div className="my-11 flex flex-wrap gap-5">

          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 ml-1">Créer par </span>
            Steeven Jacques
          </p>
          <p className="regular-16 lg:regular-20 ml-1">Concepteur Développeur D'application</p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            href="https://github.com/steeven-js/PlantMart"
            targetBlank={true}
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <Image
          src="/phone.png"
          alt="camp"
          width={300}
          height={300}
          className="w-[300px] mx-auto lg:absolute lg:left-[-5px] lg:top-[-30px] lg:w-[300px]"
        />
      </div>
    </section>
  )
}

export default Hero