import Button from "../components/Button"
import { FcOk, FcBusinessman, FcIdea } from "react-icons/fc"

const Home = () => {
  return (
    <main>
      <section className='h-screen bg-[url(https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414)] bg-scroll bg-center bg-cover bg-no-repeat bg-neutral-600/90 bg-blend-overlay'>
        <div className="container flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 justify-center h-full">
          <h1 className="lg:w-[50%] w-full text-5xl md:text-6xl lg:text-7xl text-white font-bold">Decorators design studio</h1>
          <p className="lg:w-[50%] w-full text-2xl font-bold text-white">Decorating Decorators brings 20 years of experience right to your home or office</p>
          <div className="flex gap-x-6">
            <Button className="sm:text-base text-sm text-white font-medium uppercase px-6 py-3">
              our services
            </Button>
            <Button className="sm:text-base text-sm font-medium uppercase px-6 py-3 bg-neutral-800 text-white">
              our projects
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container flex gap-x-20 lg:flex-row flex-col">
          <div className="flex-1 bg-neutral-900 text-white p-8 -mt-6 rounded">
            <h2 className="mb-12 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Welcome to Decorators</h2>
            <h3 className="text-2xl font-bold mb-12">We Have The Right Products to Fit Your Needs and Budget <span className="text-orange-500">Purchase - Decorators.</span></h3>
            <p className="mb-8">Explain to you how all this mistaken idea of denouncing ut pleasures work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interiors of the great design explorer of the truth, the master-builders design of human happiness one seds rejects, dislikes, or avoids pleasures itself.</p>
            <img src="http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/signature.png" alt="ceo signature" className="mb-8"/>
            <h4 className="text-xl font-bold">William Shocks, <span className="text-neutral-700 font-normal">Founder</span></h4>
            <p className="text-orange-500">Decorators.</p>
          </div>
          <div className="flex-1 flex flex-col gap-8 md:pt-24 pt-12">
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcBusinessman/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Professional</h3>
                <span className="text-orange-500 italic text-lg">Designers</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcOk/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Trusted</h3>
                <span className="text-orange-500 italic text-lg">Team Members</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="text-6xl">
                <FcIdea/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">We are Expert</h3>
                <span className="text-orange-500 italic text-lg">Interiors</span>
                <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home