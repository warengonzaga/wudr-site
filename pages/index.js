import React from 'react'
import ReactMarkdown from 'react-markdown';
import Head from 'next/head'
export async function getStaticProps() {
    const fs = require("fs");
  
    const files = fs.readdirSync(`${process.cwd()}`, "utf-8");
    const rules = files.filter((fn) => fn.endsWith(".md"));
  
    const data = rules.map((rule) => {
      const path = `${process.cwd()}/${rule}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
  
      return rawContent;
    });
  
    return {
      props: {
        data: data,
      },
    };
  }

const Index = ({data}) => {
  const rules = data[1]
      return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="Description" content='Website for project WUDR.'></meta>
            <title>Waren's Universal Discord Rules (WUDR) Website</title>
          </Head>
            <ReactMarkdown children={rules}/>
        </>
    )
}


export default Index