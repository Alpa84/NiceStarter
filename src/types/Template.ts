import { SerializedCanvas } from './Fabric'

export type Template = {
  id: number
  name: string
  imageSrc: string
  params: { label: string; type: string }[]
  saved: SerializedCanvas
}
