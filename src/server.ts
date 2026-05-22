import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { RouteHandle } from "./routes/route";

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    RouteHandle(req, res);
})

server.listen(5000, () => {
    console.log("Server in running on the port: 5000");
})

