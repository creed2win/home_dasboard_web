import { WeatherWidget } from '@/components/weather-widget'
import { TasksWidget } from "@/components/tasks-widget"
import currentMenu from "@/assets/currentMenu.jpg"

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
        </div>
        <div className='p-5 m-12'>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FPrague&showPrint=0&showTitle=0&showTz=0&src=ZTAxNzYzMTlkNWQwYjVlOGNjZWRhYWQ3M2NhYmI5MDIwNTA2NTcxYmQwNmMyYmQyNzU1MTExNWE0NWZkZTJmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ajgyN2gyb2swc292bjlmYmgzcjBiYmJqODduYnQ4cDRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60" width="800" height="600"></iframe>
        </div>
        <div className='p-5 m-12'>
          <img alt="current menu" src={currentMenu} width="800" height="600" />
        </div>
      </div>
    </>
  )
}

export default App