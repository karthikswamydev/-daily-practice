import { Button, TextField, Typography } from "@mui/material";
import LoginLayout from "./LoginLayout";


const HeroForm =()=> {
  return (
    <LoginLayout>
        <form>
            <div className="flex flex-col">
            <Typography variant="h6">Add a Task</Typography>
             <TextField id="task" label="Outlined" variant="outlined" />
            <Button size="small" variant="contained">Submit</Button>
            </div>
        </form>
    </LoginLayout>
    
  )
}

export default HeroForm;