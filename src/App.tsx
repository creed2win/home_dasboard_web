import { WeatherWidget } from '@/components/weather-widget'
import { TasksWidget } from "@/components/tasks-widget"

function App() {

  return (
    <>
      <div className='justify-center'>
        <div className='block'>
          <h1 className="text-center">Dashboard</h1>
        </div>

        <div className="m-12 flex ">


          <div className="p-5">
            <WeatherWidget />
          </div>

          <div className="p-5">
            <TasksWidget />
          </div>

          <div>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FPrague&showPrint=0&showTitle=0&showTz=0&src=ZTAxNzYzMTlkNWQwYjVlOGNjZWRhYWQ3M2NhYmI5MDIwNTA2NTcxYmQwNmMyYmQyNzU1MTExNWE0NWZkZTJmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ajgyN2gyb2swc292bjlmYmgzcjBiYmJqODduYnQ4cDRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60" width="800" height="600"></iframe>
          </div>

        </div>
      </div>
    </>
  )
}

export default App