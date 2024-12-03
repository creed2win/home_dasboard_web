import { Button } from "@/components/ui/button"
import { WeatherWidget } from '@/components/weather-widget'
import { TasksWidget } from "@/components/tasks-widget"

function App() {

  return (
    <>
      <div className="">
        <h1 className="">Hello World</h1>
        <Button className="">Click me</Button>
        <WeatherWidget />
        <TasksWidget />
      </div>
    </>
  )
}

export default App
