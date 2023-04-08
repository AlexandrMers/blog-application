declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.jpg'
declare module '*.png'
declare module '*.json'
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare namespace NodeJS {
  interface ProcessEnv {
    IS_DEV?: string
    API_URL?: string
  }
}
