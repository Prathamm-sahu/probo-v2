1. Client → API Server:
   The client sends a request (e.g. buy stock).

2. API Server → Redis Request Queue:
   The API server pushes the task to the Redis request queue.

3. Worker Engine → Redis Response Pub/Sub:
   The Worker Engine picks up the task, processes it (updates the orderbook), and publishes the result to the Redis response pub/sub.

4. Redis Pub/Sub → API Server:
   The API server listens to the Redis response Pub/Sub, picks up the result, and sends the response back to the client.

5. Redis Response Pub/Sub → WebSocket Server:
   The WebSocket server also listens to the Redis response pub/sub. When an updated orderbook is available, it broadcasts the orderbook of that particular stock symbol to all connected WebSocket clients.

Revision
1. Types of realtionships in prisma
   a. Recursive relation
   b. many-many realtion - See how harkirat optimized it in metaverse porject
   c. Chat realtion 

In Probo There are multiple events
Each events has multitple orders executed users
User can buy multiple orders from a single event.