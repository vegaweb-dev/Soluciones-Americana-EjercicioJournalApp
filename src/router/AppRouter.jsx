import { Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <div>
      <Routes>


        {/* Login registro */}
        <Route path="/auth/*" element={<AuthRoute/>}/>


        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes/>}/>


      </Routes>
    </div>
  )
}


