import app from "./src/app.ts";
import { config } from "./src/config/config.ts";
import { connectDB } from "./src/config/db.ts";

const startserver = async ()=>{
    await connectDB();
    const PORT = config.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
startserver();
