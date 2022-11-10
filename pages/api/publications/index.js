import { publications } from '../../../data'

export default function Publications(request, response) {
  return response.status(200).json({ publications })
}
