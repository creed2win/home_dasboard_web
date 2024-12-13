import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function WeatherWidget() {
const [currentTemp, setCurrentTemp] = useState(1)
const [currentFeelsLikeTemp, setCurrentFeelsLikeTemp] = useState(1)
const [currentHumidity, setCurrentHumidity] = useState(1)
const [currentWindSpeed, setCurrentWindSpeed] = useState(1)

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=50.41135&lon=14.90318&units=metric&appid=6a119a5eca604dbde6cb073ac28ec977"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weatherData = await response.json();
    setCurrentTemp(weatherData.list[0].main.temp);
    console.log("set current temp to:", currentTemp)
    setCurrentFeelsLikeTemp(weatherData.list[0].main.feels_like);
    setCurrentHumidity(weatherData.list[0].main.humidity);
    setCurrentWindSpeed(weatherData.list[0].wind.speed);
  } catch (error: any) {
    console.error(error.message);
  }
}
useEffect(() => {
  getWeatherData()
}, [])
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-5">
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs text-muted-foreground">Reálná</p>
          <div className="text-2xl font-bold">{currentTemp}°C</div>

          <p className="text-xs text-muted-foreground">Pocitová</p>
          <div className="text-2xl font-bold">{currentFeelsLikeTemp}°C</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Vlhkost</span>
            <span className="font-medium">{currentHumidity} %</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Vítr</span>
            <span className="font-medium">{currentWindSpeed} m/s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
