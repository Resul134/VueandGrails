package demo

import groovy.transform.CompileStatic

@CompileStatic
class BootStrap {

    DriverDataService driverDataService
    MakeDataService makeDataService
    ModelDataService modelDataService
    VehicleDataService vehicleDataService
    def init = { servletContext ->
        log.info "Loading database..."
        Driver driver1 = driverDataService.save("Susan")
        Driver driver2 = driverDataService.save("Pedro")

        Make nissan = makeDataService.save("Nissan", 1987)
        Make ford = makeDataService.save("Ford", 1999)

        Model titan = modelDataService.save("Titan")
        Model leaf = modelDataService.save("Leaf")
        Model windstar = modelDataService.save("Windstar")

        vehicleDataService.save("Pickup", driver1, nissan, titan)
        vehicleDataService.save("Economy", driver1, nissan, leaf)
        vehicleDataService.save("Minivan", driver2, ford, windstar)
        vehicleDataService.save("Lambo", driverDataService.save("Resul"), makeDataService.save("Guilardo", 1987), modelDataService.save("Sport"))

    }
    def destroy = {
    }
}