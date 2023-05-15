import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Transition from '../components/utils/Transition'
import Marquee from 'react-fast-marquee'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import Project from '@/components/Project'

import amgen from '../images/Amgen.png'
import sita from '../images/Sita.png'
import headspace from '../images/Headspace.png'
import topschool from '../images/TopSchool.png'
import virbook from '../images/Virbook.png'
import grappus from '../images/grappus.png'
import mnr from '../images/mnr.jpeg'
import ae from '../images/ae.png'
import mycaptain from '../images/mycaptain.png'
import { Briefcase, List } from 'react-feather'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Grappus',
      title: 'Product Designer',
      logo: grappus,
      start: '2020',
      end: '2022',
    },
    {
      company: 'McKinley & Rice',
      title: 'Frontend Engineer',
      logo: mnr,
      start: '2019',
      end: '2020',
    },
    {
      company: 'AdEase',
      title: 'Co-Founder',
      logo: ae,
      start: '2017',
      end: '2019',
    },
    {
      company: 'MyCaptain',
      title: 'Web Developer',
      logo: mycaptain,
      start: '2016',
      end: '2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <List className="h-6 w-6 flex-none" />
        <span className="ml-3">Resume</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1u0MpC1YJMU1Ex4ltWLwJHP6G783_CjEl/view?usp=sharing"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Abhishek - Product designer, full stack developer</title>
        <meta
          name="description"
          content="I'm Abhishek, a product designer and full stack developer from New York!"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl font-medium text-zinc-900 dark:text-zinc-100">
          <div className="mt-8">
            <Transition delay={1}>
              <p className="my-3 text-lg">
                A{' '}
                <span className="mx-1 rounded-md border-2 border-zinc-900 p-1  dark:border-zinc-100">
                  {' '}
                  product designer
                </span>{' '}
              </p>
            </Transition>
            <Transition delay={1.8}>
              <p className="my-3 text-lg">
                and
                <span className="mx-1 rounded-md border-2 border-zinc-900 p-1  dark:border-zinc-100">
                  frontend developer
                </span>{' '}
              </p>
            </Transition>
            <Transition delay={2.6}>
              <p className="my-3 text-lg">
                based in{' '}
                <span className="mx-1 rounded-md border-2 border-zinc-900 p-1  dark:border-zinc-100">
                  New York City
                </span>{' '}
              </p>
            </Transition>

            <div className="flex">
              <Transition delay={3.4}>
                <p className="mt-3 text-lg">who...</p>
              </Transition>
              <Transition delay={4.2}>
                <div className="ml-2 w-72 rounded-md bg-[#e6e9ef] py-2  px-3 dark:bg-[#27292E]">
                  <Marquee
                    className=" rounded-md text-lg text-zinc-900 dark:text-zinc-100"
                    pauseOnHover
                  >
                    &nbsp; Designs usable interfaces – Builds interactive
                    applications – Maintains scalabale design systems – Builds
                    Figma plugins – Teaches code to design students – Helps
                    puppies find homes – Is just trying to do his best –
                  </Marquee>
                </div>
              </Transition>
            </div>
          </div>
          {/* <h1 className=" sm:text-md font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl lg:text-xl">
            <span className="mr-2">📱</span> Designer of usable interfaces.
          </h1>
          <h1 className=" sm:text-md font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl lg:text-xl">
            <span className="mr-2">💻</span> Developer of full stack
            applications.
          </h1>
          <h1 className=" sm:text-md font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl lg:text-xl">
            <span className="mr-2">🧱</span> Maintainer of scalable design
            systems.
          </h1>
          <p className="mt-6 font-semibold text-zinc-600 dark:text-zinc-400">
            I’m Abhishek, a product designer and full stack developer based in
            New York City. I’m obsessed with the power of scalable design
            systems and passionate about deploying them to optimize health
            products
          </p> */}
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
      </Container>
      <Transition delay={4.6}>
        <Container className="mt-12 md:mt-16">
          <h2 className="mb-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <Briefcase className="h-6 w-6 flex-none" />
            <span className="ml-3">Selected Projects</span>
          </h2>
          <div className="projects mb-10 grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <Transition delay={4.8}>
              <Project
                title="Making managing Osteoporosis easier"
                subtitle="Product Design / 2022"
                image={amgen}
                link="/articles/making-managing-osteoporosis-easier"
              />
            </Transition>

            <Transition delay={5}>
              <Project
                title="Crafting a design system for India's largest travel company"
                subtitle="Product Design / 2022"
                image={sita}
                link="https://drive.google.com/file/d/1-HMl-Op7KvcTuVq8JXVMhpamQBtIfLDT/view"
              />
            </Transition>
            <Transition delay={5.2}>
              <Project
                title="Making e-learning accessible for Indian schools"
                subtitle="Product Design / 2022"
                image={topschool}
                link="https://drive.google.com/file/d/1RWa3Rf9d0OrIAStMvk4jgka0_9oi7Gy6/view?usp=sharing"
              />
            </Transition>

            <Transition delay={5.4}>
              <Project
                title="A metaverse powered event management app"
                subtitle="Product Design / 2021"
                image={virbook}
                link="https://drive.google.com/file/d/1qok48saVMmJsAoZhQFV0zj--LoHH9Qk2/view"
              />
            </Transition>

            <Transition delay={5.6}>
              <Project
                title="Guided journaling for Headspace"
                subtitle="Product Design / 2023"
                image={headspace}
                link="/articles/guided-journaling-for-headspace"
                comingSoon
              />
            </Transition>
          </div>
          <div className="space-y-10">
            <Resume />
          </div>
        </Container>
      </Transition>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
