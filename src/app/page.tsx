import Image from 'next/image'
import {
  Scale,
  Coins,
  BadgeCheck,
  CheckCircle2,
  Star,
  Linkedin,
  Github,
} from 'lucide-react'
import Link from 'next/link'
import person1Img from '../../public/assets/person-1.jpg'
import person2Img from '../../public/assets/person-2.jpg'
import person3Img from '../../public/assets/person-3.jpg'
import person4Img from '../../public/assets/person-4.jpg'
import person5Img from '../../public/assets/person-5.jpg'
import person6Img from '../../public/assets/person-6.jpg'
import houseImg from '../../public/assets/house.png'
import buildingImg from '../../public/assets/building.png'
import briefcaseImg from '../../public/assets/briefcase.png'

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen max-w-[1440px] flex-col p-8 mx-auto">
        {/* Header - Navigation */}
        <header className="flex justify-between items-center w-full mt-8 text-sky-900">
          <span className="font-bold text-xl">Insurance</span>
          <ul className="hidden md:flex gap-24">
            <li>Personal</li>
            <li>Business</li>
            <li>Employee</li>
            <li>Bounds</li>
          </ul>
          <Link className="underline decoration-1 underline-offset-4" href="#">
            Get a quote
          </Link>
        </header>
        {/* Hero Banner */}
        <div className="min-h-[400px] md:min-h-[700px] bg-cover bg-no-repeat bg-[url('../../public/assets/banner.jpg')] flex flex-col items-center gap-8 my-10 p-12 rounded-3xl text-white">
          {/* Heading Desktop */}
          <h1 className="hidden md:block text-xl md:text-5xl font-semibold text-center md:leading-relaxed capitalize mt-16">
            <span className="text-teal-600">Protect</span> yourself and your
            assets
            <br /> from the worst possible for
            <br /> securing your <span className="text-teal-600">future</span>
          </h1>
          {/* Heading Mobile */}
          <h1 className="block md:hidden text-2xl font-semibold text-center md:leading-relaxed capitalize mt-16">
            <span className="text-teal-600">Protect</span> yourself and your
            assets from the worst possible for securing your{' '}
            <span className="text-teal-600">future</span>
          </h1>
          <p className="text-sm md:text-base text-center leading-relaxed">
            We are experienced agents writing quality insurance coverage
            <br /> since 1958 with many satisfied customers.
          </p>
        </div>
        <div className="bg-white rounded-3xl w-11/12 h-36 mx-auto -mt-32 hidden md:flex justify-between items-center p-10">
          <div className="flex flex-col gap-2 text-slate-800">
            <label>Name</label>
            <input className="outline-none" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              className="outline-none"
              placeholder="Email For Information"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Phone Number</label>
            <input
              className="outline-none"
              placeholder="Number For Comunicate"
            />
          </div>
          <button className="bg-teal-600 hover:bg-teal-800 transition-all  text-white  py-3 px-6 rounded-lg">
            Get Quote
          </button>
        </div>
        {/* Insurance Needs Block */}
        <div className="flex flex-col my-32 gap-24">
          {/* Insurance Needs Text */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-4">
            <h2 className="text-4xl font-semibold capitalize leading-normal text-sky-900">
              The solution to your
              <br /> insurance needs
            </h2>
            <p className="text-sky-700">
              We offer a comprehensive range of personal, business, and
              <br /> employee benefit insurance products with a wide range of
              <br /> the state&apos;s leading and most respected insurers.
            </p>
          </div>
          {/* Insurance Needs Options */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-10">
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <BadgeCheck size={48} color="#0d9488" />
              <strong className="text-sky-900">
                Financial
                <br /> Professional
              </strong>
              <p>
                Consists of knowledgeable
                <br /> advisors who are ready to assist
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <Scale size={48} color="#0d9488" />
              <strong className="text-sky-900">
                Mature <br />
                Calculation
              </strong>
              <p>
                Best decision towards minimizing
                <br /> risks and maximizing protection
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <Coins size={48} color="#0d9488" />
              <strong className="text-sky-900">
                According
                <br /> Condition
              </strong>
              <p>
                We do by customizing towards
                <br /> needs in price and coverage
              </p>
            </div>
          </div>
        </div>
        {/* Plans Block */}
        <div className="min-h-[700px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-800 via-slate-800 to-teal-800 flex flex-col items-center gap-8 my-10 p-12 rounded-3xl">
          <h2 className="text-xl md:text-5xl font-semibold text-center leading-relaxed capitalize mt-16 text-white">
            The best <span className="text-teal-600">service</span> that we have
          </h2>
          <p className="text-center leading-relaxed text-slate-400">
            Providing a variety of personal insurance solutions, business
            insurance,
            <br /> and employee benefits is the best from insurance
            incorporated.
          </p>
        </div>
        <div className="space-y-48 md:space-y-0 w-11/12 mx-auto -mt-64 flex flex-col md:flex-row justify-between items-center text-slate-700">
          <div className="relative flex flex-col items-center bg-white w-full min-h-[600px] gap-10 px-4 py-16 m-2 rounded-3xl shadow-xl shadow-gray-200">
            <Image
              src={houseImg}
              alt=""
              width={280}
              height={280}
              className="absolute -top-32"
            />
            <h3 className="text-xl font-semibold">Personal Insurance</h3>
            <span>
              <span className="text-5xl font-bold">$127</span>/Month
            </span>
            <ul className="list-disc space-y-8 mt-4">
              <li>Home Insurance</li>
              <li>Auto Insurance</li>
              <li>Individual Life Insurance</li>
              <li>Individual Health Insurance</li>
            </ul>
            <button className="font-semibold py-4 px-24 rounded-xl mt-auto">
              Subscribe
            </button>
          </div>
          <div className="relative flex flex-col items-center bg-white w-full min-h-[600px] gap-10 px-4 py-16 m-2 rounded-3xl shadow-xl shadow-gray-200">
            <Image
              src={buildingImg}
              alt=""
              width={280}
              height={280}
              className="absolute -top-32"
            />
            <h3 className="text-xl font-semibold">Business Insurance</h3>
            <span>
              <span className="text-5xl font-bold text-teal-600">$1.967</span>
              /Month
            </span>
            <ul className="list-disc space-y-8 mt-4">
              <li>Business Owner Insurance</li>
              <li>General Liability Insurance</li>
              <li>Compansation Insurance</li>
              <li>Business Auto Insurance</li>
            </ul>
            <button className="bg-teal-600 transition-all hover:bg-teal-700 text-white py-4 px-24 rounded-xl mt-auto">
              Subscribe
            </button>
          </div>
          <div className="relative flex flex-col items-center bg-white w-full min-h-[600px] gap-10 px-4 py-16 m-2 rounded-3xl shadow-xl shadow-gray-200">
            <Image
              src={briefcaseImg}
              alt=""
              width={180}
              height={180}
              className="absolute -top-32"
            />
            <h3 className="text-xl font-semibold">Employee Insurance</h3>
            <span>
              <span className="text-5xl font-bold">$324</span>/Month
            </span>
            <ul className="list-disc space-y-8 mt-4">
              <li>Business Owner Insurance</li>
              <li>Group Dental Insurance</li>
              <li>Group Vision Insurance</li>
              <li>Group Voluntary Insurance</li>
            </ul>
            <button className="font-semibold py-4 px-24 rounded-xl mt-auto">
              Subscribe
            </button>
          </div>
        </div>
        {/* Motivations Block */}
        <div className="flex flex-col md:flex-row justify-evenly my-32 p-4 gap-10 md:gap-0">
          <ul className="flex flex-col gap-8">
            <li className="relative flex justify-center items-center bg-slate-700 text-white py-6 px-16 rounded-xl">
              Professional service
              <span className="absolute -right-2 -bottom-2 w-10 h-10 border-4 border-white bg-teal-600 rounded-full flex justify-center items-center">
                01
              </span>
            </li>
            <li className="relative flex justify-center items-center py-6 px-16 rounded-xl text-sky-900">
              Expertise you can trust
              <span className="absolute -right-2 -bottom-2 w-10 h-10 text-white border-4 border-white bg-teal-600 rounded-full flex justify-center items-center">
                02
              </span>
            </li>
            <li className="relative flex justify-center items-center py-6 px-16 rounded-xl text-sky-900">
              Promp Responses
              <span className="absolute -right-2 -bottom-2 w-10 h-10 text-white border-4 border-white bg-teal-600 rounded-full flex justify-center items-center">
                03
              </span>
            </li>
            <li className="relative flex justify-center items-center py-6 px-16 rounded-xl text-sky-900">
              Experienced agents
              <span className="absolute -right-2 -bottom-2 w-10 h-10 text-white border-4 border-white bg-teal-600 rounded-full flex justify-center items-center">
                04
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-semibold capitalize leading-normal text-sky-900">
              The advantage of an
              <br /> independent agency
              <br /> working for you
            </h2>
            <p className="text-sky-700">
              What makes our insurance services different with
              <br /> any finance agency?
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={24} fill="#3b82f6" color="#fff" />
                We represent multiple
                <br /> different insurance companies.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={24} fill="#3b82f6" color="#fff" />
                We are there for you in
                <br /> your time of need.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={24} fill="#3b82f6" color="#fff" />
                We are licensed insurance
                <br /> advisors.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={24} fill="#3b82f6" color="#fff" />
                We offer a wide variety of
                <br /> insurance solutions.
              </li>
            </ul>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="flex flex-col items-center gap-20 my-32">
          <h2 className="text-4xl font-semibold capitalize leading-normal text-center text-slate-800">
            Real <span className="text-teal-600">clients</span> with honest{' '}
            <span className="text-teal-600">reviews</span>
            <br /> and they are coverage.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full justify-items-start text-slate-800">
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person1Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Bradley Lawlor</h3>
                  <p className="text-sm">Super Duper</p>
                </div>
              </div>
              <p>
                Impressed with their quick claim processing!
                <br /> Got my reimbursement hassle-free.
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person2Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Jerry Helfer</h3>
                  <p className="text-sm">Rhodes Furniture</p>
                </div>
              </div>
              <p>
                Great coverage options.
                <br />
                Helped me find the perfect plan for my needs.
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person3Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">John Dukes</h3>
                  <p className="text-sm">Britches</p>
                </div>
              </div>
              <p>
                Their customer support was fantastic.
                <br />
                Answered all my queries patiently.
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person4Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">John Stuart</h3>
                  <p className="text-sm">Mostow Co.</p>
                </div>
              </div>
              <p>
                Affordable premiums for comprehensive coverage.
                <br />
                Highly recommend!
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person5Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Patricia Sanders</h3>
                  <p className="text-sm">GeorgeTown Co.</p>
                </div>
              </div>
              <p>
                Smooth online application process.
                <br /> Had my policy in minutes.
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-4">
                <Image
                  src={person6Img}
                  alt="client1"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Daniel Hamilton</h3>
                  <p className="text-sm">BN Co.</p>
                </div>
              </div>
              <p>
                Handled my accident claim efficiently.
                <br /> Made a stressful situation easier.
              </p>
              <div className="flex gap-2">
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
                <Star size={16} fill="#ecbb23" color="#ecbb23" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-800 via-slate-800 to-teal-800 md:h-[500px] md:mt-32 md:pt-52 text-slate-400">
        <div className="max-w-[1440px] flex flex-col w-11/12 p-8 mx-auto gap-6 h-full">
          <span className="font-bold text-xl">Insurance</span>
          <p className="leading-normal">
            Insurance Incorporated offers comprehensive insurance
            <br /> solutions to individuals, families and businesses
          </p>
          <div className="mt-auto flex justify-between items-center border-t border-gray-900 pt-4">
            <span> &copy; 2020 All Rights Reserved</span>
            <ul className="flex justify-between items-center gap-4 text-white">
              <li className="flex justify-center items-center bg-gray-200 bg-opacity-30 p-2 rounded-full">
                <Linkedin size={20} />
              </li>
              <li className="flex justify-center items-center bg-gray-200 bg-opacity-30 p-2 rounded-full">
                <Github size={20} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Banner Footer */}
      <div className="max-w-[1440px] bg-white text-white rounded-3xl w-11/12 h-52 mx-auto -mt-[600px] hidden md:flex justify-between items-center p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold capitalize leading-normal text-slate-800">
            Hey, <span className="text-teal-600">lets get started</span> to
            <br /> secure your live.
          </h2>
        </div>
        <button className="bg-teal-600 transition-all hover:bg-teal-700 text-white  py-3 px-6 rounded-lg">
          Contact Now
        </button>
      </div>
    </>
  )
}
