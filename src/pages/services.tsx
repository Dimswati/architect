import Container from "../components/Container"
import Button from "../components/Button"
import useServices from "../hooks/useServices"
import Service from "../components/Service"

const Services = () => {

  const { services } = useServices()

  return (
    <>
      <Container innerClasses="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          services.map(service => (
            <Service key={service.id} {...service}/>
          ))
        }
      </Container>
      <Container sectionClasses="bg-[url(http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/image-1-1.jpg)] h-96 bg-center bg-cover bg-fixed bg-neutral-600 bg-blend-overlay" innerClasses="container flex flex-col items-center justify-center h-full text-white text-center">
        <h4 className="text-xl mb-5">Join with Decorators and</h4>
        <h3 className="text-4xl mb-8">Now Make Your Home More Lovely!</h3>
        <div className="flex sm:flex-row flex-col gap-y-4 gap-x-5">
          <Button>contact us</Button>
          <Button className="bg-neutral-800">shop now</Button>
        </div>
      </Container>
    </>
  )
}

export default Services