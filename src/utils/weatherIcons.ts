import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun } from 'lucide-react'

export const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return Sun
    case 'cloudy':
      return Cloud
    case 'rainy':
      return CloudRain
    case 'drizzle':
      return CloudDrizzle
    case 'snowy':
      return CloudSnow
    case 'stormy':
      return CloudLightning
    case 'foggy':
      return CloudFog
    default:
      return Sun
  }
}

