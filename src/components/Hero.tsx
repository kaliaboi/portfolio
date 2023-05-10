import { FC } from 'react'
import Transition from '../components/utils/Transition'
import Marquee from 'react-fast-marquee'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="mt-8">
      <Transition delay={1}>
        <p className="my-3 text-lg">
          A{' '}
          <span className="mx-1 rounded-md border-2 p-1">
            {' '}
            product designer
          </span>{' '}
        </p>
      </Transition>
      <Transition delay={1.8}>
        <p className="my-3 text-lg">
          and
          <span className="mx-1 rounded-md border-2 p-1">
            frontend developer
          </span>{' '}
        </p>
      </Transition>
      <Transition delay={2.6}>
        <p className="my-3 text-lg">
          based in{' '}
          <span className="mx-1 rounded-md border-2 p-1">New York City</span>{' '}
        </p>
      </Transition>

      <div className="flex">
        <Transition delay={3.4}>
          <p className="mt-3 text-lg">who...</p>
        </Transition>
        <Transition delay={4.2}>
          <div className="ml-2 w-72 rounded-md bg-[#27292E] py-2 px-3">
            <Marquee className=" rounded-md text-lg text-white" pauseOnHover>
              &nbsp; Designs usable interfaces – Builds interactive applications
              – Maintains scalabale design systems – Builds Figma plugins –
              Teaches code to design students – Helps puppies find homes – Is
              just trying to do his best –
            </Marquee>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default Hero
