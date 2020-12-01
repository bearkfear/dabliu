import { NowRequest, NowResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";

export default async (req: NowRequest, res: NowResponse) => {

  if (req.method === "POST") {

    if (req.body.nick && String(req.body).length > 0) {
      const nick = String(req.body.nick);

      const client = new PrismaClient();

      try {
        const exists = await client.urls.findUnique({
          where: { nick }
        });
        return res.json(exists);
        // if (Object.values(exists).length > 0) {
        //
        // } else {
        //   res.json(exists);
        // }
      } catch (e) {
        return res.status(400).json({
          message: "Ainda nao sei mas é mais o menos isso",
          error: e
        });
      } finally {
        client.$disconnect()
      }
    } else {
      return res.status(401).json({
        message: "errou"
      });
    }
  } else {
    return res.json({
      message: "que viaje é essa!"
    });
  }
}