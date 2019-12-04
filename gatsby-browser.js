/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/index.scss"

import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"

import { MusicPlayerProvider } from "./src/context/MusicPlayerContext"
import { Client } from "./src/apollo/wrap-root-element"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={Client}>
    <MusicPlayerProvider>{element}</MusicPlayerProvider>
  </ApolloProvider>
)

if (typeof document !== `undefined`) {
  const el = document.createElement("audio")
  el.id = "audio"
  !document.getElementById("audio") && document.body.appendChild(el)
}
