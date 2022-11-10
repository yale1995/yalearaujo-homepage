/* eslint-disable no-unused-vars */
import { publications } from '../../../data'

export default function Publication(request, response) {
  const filteredPublication = publications.filter(publication => {
    if (publication.id == request.query.id) {
      return publication
    }
  })

  return response.status(200).json({ filteredPublication })
}
