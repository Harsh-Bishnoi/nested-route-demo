import lamborgini from '../assets/images/svg/lamborghini-huracan.svg'
import wrangler from '../assets/images/svg/jeep-wrangler.svg'
import ScorpioN from '../assets/images/svg/scorpioN.svg'
import ferrari from '../assets/images/svg/ferrari.svg'
import ScorpioClassic from '../assets/images/svg/scorpios11.svg'
import McLaren from '../assets/images/svg/mclaren.svg'
import defender from '../assets/images/svg/defender.svg'
import proche from '../assets/images/svg/porche.svg'
import landCrusior from '../assets/images/svg/land-crusier.svg'

export const CARS_DATA = [
    {
        id: 1,
        img: lamborgini,
        name: "Lamborghini Huracán",
        type: "Supercar",
        brand: "Lamborghini",
        fuelType: "Petrol",
        features: ["V10 Engine", "All-Wheel Drive", "Carbon Ceramic Brakes"]
    },
    {
        id: 2,
        img: wrangler,
        name: "Jeep Wrangler Rubicon",
        type: "Off-Road",
        brand: "Jeep",
        fuelType: "Petrol",
        features: ["4x4 Drivetrain", "High Ground Clearance", "Rock-Trac Transfer Case"]
    },
    {
        id: 3,
        img: ScorpioN,
        name: "Mahindra Scorpio-N",
        type: "SUV / Off-Road",
        brand: "Mahindra",
        fuelType: "Diesel",
        features: ["4XPLOR Terrain Modes", "Body-on-Frame Design", "AdrenoX Infotainment System"]
    },
    {
        id: 4,
        img: ferrari,
        name: "Ferrari 296 GTB",
        type: "Supercar",
        brand: "Ferrari",
        fuelType: "Hybrid",
        features: ["Plug-in Hybrid V6", "Active Aerodynamics", "Performance Traction Control"]
    },
    {
        id: 5,
        img: ScorpioClassic,
        name: "Mahindra Scorpio Classic",
        type: "SUV / Off-Road",
        brand: "Mahindra",
        fuelType: "Diesel",
        features: ["Strong Suspension", "Spacious Interior", "Multi-Drive Modes"]
    },
    {
        id: 6,
        img: McLaren,
        name: "McLaren 720S",
        type: "Supercar",
        brand: "McLaren",
        fuelType: "Petrol",
        features: ["Twin-Turbo V8", "Carbon Fiber Monocoque", "Active Suspension"]
    },
    {
        id: 7,
        img: defender,
        name: "Land Rover Defender",
        type: "Off-Road",
        brand: "Land Rover",
        fuelType: "Diesel",
        features: ["Terrain Response System", "All-Terrain Progress Control", "Adjustable Air Suspension"]
    },
    {
        id: 8,
        img: proche,
        name: "Porsche 911 Turbo S",
        type: "Supercar",
        brand: "Porsche",
        fuelType: "Petrol",
        features: ["Twin-Turbocharged Boxer Engine", "All-Wheel Drive", "Adaptive Aerodynamics"]
    },
    {
        id: 9,
        img: landCrusior,
        name: "Toyota Land Cruiser",
        type: "Off-Road",
        brand: "Toyota",
        fuelType: "Diesel",
        features: ["Multi-Terrain Select", "Crawl Control", "Robust Body-on-Frame"]
    }
];