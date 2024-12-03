import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getWeatherIcon } from '@/utils/weatherIcons'

interface WeatherData {
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
}

// Mock API call - replace with actual API in production
const fetchWeatherData = (): Promise<WeatherData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 22,
        condition: 'Sunny',
        humidity: 60,
        windSpeed: 5,
      })
    }, 1000)
  })
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    fetchWeatherData().then(setWeather)
  }, [])

  if (!weather) {
    return <Card className="w-full max-w-sm"><CardContent>Loading weather data...</CardContent></Card>
  }

  const WeatherIcon = getWeatherIcon(weather.condition)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weather</CardTitle>
        <WeatherIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{weather.temperature}°C</div>
        <p className="text-xs text-muted-foreground">{weather.condition}</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Humidity</span>
            <span className="font-medium">{weather.humidity}%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Wind Speed</span>
            <span className="font-medium">{weather.windSpeed} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

