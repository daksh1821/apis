import app from "./src/app.ts";
import { config } from "./src/config/config.ts";

const startserver = ()=>{
    const PORT = config.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
startserver();
