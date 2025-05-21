import lamborgini from '../assets/images/svg/lamborghini-huracan.svg'
import lamboInterior from '../assets/images/png/lambo-interior.png'
import lamboEngine from '../assets/images/png/lambo-engine.png'
import lamboFront from '../assets/images/png/lambo-front.png'
import lamboSeat from '../assets/images/png/lambo-seat.png'
import lamboGear from '../assets/images/png/lambo-gear.png'
import wrangler from '../assets/images/svg/jeep-wrangler.svg'
import wranglerInterior from '../assets/images/png/wrangler-interior.png'
import wranglerEngine from '../assets/images/png/wrangler-engine.png'
import wranglerFront from '../assets/images/png/wrangler-front.png'
import wranglerSeat from '../assets/images/png/wrangler-seat.png'
import wranglerGear from '../assets/images/png/wrangler-gear.png'
import ScorpioN from '../assets/images/svg/scorpioN.svg'
import scorpioNInterior from '../assets/images/png/scorpio-n-interior.png'
import scorpioNEngine from '../assets/images/png/scorpio-n-engine.png'
import scorpioNFront from '../assets/images/png/scorpio-n-front.png'
import scorpioNSeat from '../assets/images/png/scorpio-n-seat.png'
import scorpioNGear from '../assets/images/png/scorpio-n-gear.png'
import ferrari from '../assets/images/svg/ferrari.svg'
import ferrariInterior from '../assets/images/png/ferrari-interior.png'
import ferrariEngine from '../assets/images/png/ferrari-engine.png'
import ferrariFront from '../assets/images/png/ferrari-front.png'
import ferrariSeat from '../assets/images/png/ferrari-seat.png'
import ferrariGear from '../assets/images/png/ferrari-gear.png'
import ScorpioClassic from '../assets/images/svg/scorpios11.svg'
import scorpioClassicInterior from '../assets/images/png/scorpio-s11-interior.png'
import scorpioClassicEngine from '../assets/images/png/scorpio-s11-engine.png'
import scorpioClassicFront from '../assets/images/png/scorpio-s11-front.png'
import scorpioClassicSeat from '../assets/images/png/scorpio-s11-seat.png'
import scorpioClassicGear from '../assets/images/png/scorpio-s11-gear.png'
import McLaren from '../assets/images/svg/mclaren.svg'
import mcLarenInterior from '../assets/images/png/McLaren-interior.png'
import mcLarenEngine from '../assets/images/png/McLaren-engine.png'
import mcLarenFront from '../assets/images/png/McLaren-front.png'
import mcLarenSeat from '../assets/images/png/McLaren-seat.png'
import mcLarenGear from '../assets/images/png/McLaren-gear.png'
import defender from '../assets/images/svg/defender.svg'
import defenderInterior from '../assets/images/png/defender-interior.png'
import defenderEngine from '../assets/images/png/defender-engine.png'
import defenderFront from '../assets/images/png/defender-front.png'
import defenderSeat from '../assets/images/png/defender-seat.png'
import defenderGear from '../assets/images/png/defender-gear.png'
import porche from '../assets/images/svg/porche.svg'
import porcheInterior from '../assets/images/png/porche-interior.png'
import porcheEngine from '../assets/images/png/porche-engine.png'
import porcheFront from '../assets/images/png/porche-front.png'
import porcheSeat from '../assets/images/png/porche-seat.png'
import porcheGear from '../assets/images/png/porche-gear.png'
import landCrusior from '../assets/images/svg/land-crusier.svg'
import landCrusiorInterior from '../assets/images/png/landcrusior-interior.png'
import landCrusiorEngine from '../assets/images/png/landcrusior-engine.png'
import landCrusiorFront from '../assets/images/png/landcrusior-front.png'
import landCrusiorSeat from '../assets/images/png/landcrusior-seat.png'
import landCrusiorGear from '../assets/images/png/landcrusior-gear.png'

export const CARS_DATA = [
    {
        id: 1,
        img: lamborgini,
        name: "Lamborghini Huracán",
        type: "Supercar",
        brand: "Lamborghini",
        fuelType: "Petrol",
        features: ["V10 Engine", "All-Wheel Drive", "Carbon Ceramic Brakes"],
        img_1: lamboEngine,
        img_2: lamboInterior,
        img_3: lamboFront,
        img_4: lamboSeat,
        img_5: lamboGear,
    },
    {
        id: 2,
        img: wrangler,
        name: "Jeep Wrangler Rubicon",
        type: "Off-Road",
        brand: "Jeep",
        fuelType: "Petrol",
        features: ["4x4 Drivetrain", "High Ground Clearance", "Rock-Trac Transfer Case"],
        img_1: wranglerEngine,
        img_2: wranglerInterior,
        img_3: wranglerFront,
        img_4: wranglerSeat,
        img_5: wranglerGear,
    },
    {
        id: 3,
        img: ScorpioN,
        name: "Mahindra Scorpio-N",
        type: "SUV / Off-Road",
        brand: "Mahindra",
        fuelType: "Diesel",
        features: ["4XPLOR Terrain Modes", "Body-on-Frame Design", "AdrenoX Infotainment System"],
        img_1: scorpioNEngine,
        img_2: scorpioNInterior,
        img_3: scorpioNFront,
        img_4: scorpioNSeat,
        img_5: scorpioNGear,
    },
    {
        id: 4,
        img: ferrari,
        name: "Ferrari 296 GTB",
        type: "Supercar",
        brand: "Ferrari",
        fuelType: "Hybrid",
        features: ["Plug-in Hybrid V6", "Active Aerodynamics", "Performance Traction Control"],
        img_1: ferrariEngine,
        img_2: ferrariInterior,
        img_3: ferrariFront,
        img_4: ferrariSeat,
        img_5: ferrariGear,
    },
    {
        id: 5,
        img: ScorpioClassic,
        name: "Mahindra Scorpio Classic",
        type: "SUV / Off-Road",
        brand: "Mahindra",
        fuelType: "Diesel",
        features: ["Strong Suspension", "Spacious Interior", "Multi-Drive Modes"],
        img_1: scorpioClassicEngine,
        img_2: scorpioClassicInterior,
        img_3: scorpioClassicFront,
        img_4: scorpioClassicSeat,
        img_5: scorpioClassicGear,
    },
    {
        id: 6,
        img: McLaren,
        name: "McLaren 720S",
        type: "Supercar",
        brand: "McLaren",
        fuelType: "Petrol",
        features: ["Twin-Turbo V8", "Carbon Fiber Monocoque", "Active Suspension"],
        img_1: mcLarenEngine,
        img_2: mcLarenInterior,
        img_3: mcLarenFront,
        img_4: mcLarenSeat,
        img_5: mcLarenGear,
    },
    {
        id: 7,
        img: defender,
        name: "Land Rover Defender",
        type: "Off-Road",
        brand: "Land Rover",
        fuelType: "Diesel",
        features: ["Terrain Response System", "All-Terrain Progress Control", "Adjustable Air Suspension"],
        img_1: defenderEngine,
        img_2: defenderInterior,
        img_3: defenderFront,
        img_4: defenderSeat,
        img_5: defenderGear,
    },
    {
        id: 8,
        img: porche,
        name: "Porsche 911 Turbo S",
        type: "Supercar",
        brand: "Porsche",
        fuelType: "Petrol",
        features: ["Twin-Turbocharged Boxer Engine", "All-Wheel Drive", "Adaptive Aerodynamics"],
        img_1: porcheEngine,
        img_2: porcheInterior,
        img_3: porcheFront,
        img_4: porcheSeat,
        img_5: porcheGear,
    },
    {
        id: 9,
        img: landCrusior,
        name: "Toyota Land Cruiser",
        type: "Off-Road",
        brand: "Toyota",
        fuelType: "Diesel",
        features: ["Multi-Terrain Select", "Crawl Control", "Robust Body-on-Frame"],
        img_1: landCrusiorEngine,
        img_2: landCrusiorInterior,
        img_3: landCrusiorFront,
        img_4: landCrusiorSeat,
        img_5: landCrusiorGear,
    }
];