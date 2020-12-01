import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import React from "react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {

  const props = {
    url: "",
    error: ""
  };
  if (context.params.nick) {
    const client = new PrismaClient();

    try {
      const resp = await client.urls.findUnique({
        where: {
          nick: String(context.params.nick)
        },
        select: {
          url: true
        }
      });
      if (resp.url) {
        props.url = resp.url;
      }
    } catch (e) {
      console.log("error", e);
      props.error = `o ${context.params.nick} não existe!`;
    } finally {
      client.$disconnect();
    }
  }
  return {
    props
  };
};

export default function Nick({ url, error }: { url: string; error: string }) {
  const router = useRouter();
  React.useEffect(() => {
    if (url !== "") router.push(url);
    else if (error !== "") router.push(`/?error=${error}`);
    else router.push("/");
  }, []);
  return <div>Carregando...</div>;
}
