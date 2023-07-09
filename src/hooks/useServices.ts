import services from "../lib/services";

const useServices = (serviceId?: number)  => {
  if(!serviceId){
    return {
      services,
      service: null
    }
  }

  const service = services.find(service => service.id === serviceId)

  if(!service){
    throw new Error(`No Such service with id ${serviceId}`)
  }

  return {
    services: null,
    service,
  }
}

export default useServices