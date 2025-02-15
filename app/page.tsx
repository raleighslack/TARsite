import { Metadata } from "next"
import { Button } from "components/Button/Button"

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "TAR Video",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://tarvideo.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
    <Button href=""></Button>
    </>
  )
}
