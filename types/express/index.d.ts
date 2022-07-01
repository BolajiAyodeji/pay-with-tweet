declare global {
    namespace Express {
      interface Request {
        send?: Record<string,any>,
        status?: number,
      }
    }
  }