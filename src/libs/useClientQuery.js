import { isBrowser } from "../pages"
import { useQuery } from "@apollo/react-hooks"
import delve from "dlv"

/**
 * @param {object} cache - кеш страницы созданный на этапе сборки проекта
 * @param {object} clientData
 * @param {array} queryNames
 * */
const compareCacheWithClient = (cache, clientData, queryNames = []) => {

  try {
    if (isBrowser() && queryNames.length) {
      const newData = Object.assign({}, cache)

      queryNames.forEach((queryName) => {
        if (delve(clientData, [queryName, "updateAt"])) {
          if (Date.parse(clientData[queryName].updateAt) > Date.parse(cache[queryName].updateAt)) {
            newData[queryName] = clientData[queryName]
          }
        }
      })

      return newData
    } else {
      return cache
    }
  } catch (e) {
    console.log(e)
    return cache
  }
}


/**
 * @param {object} cache - кеш страницы созданный на этапе сборки проекта
 * @param {DocumentNode} query - gql запрос который будет выполнен на клиенте
 * @param {array} queryNames - массив имен запросов gql
 * */
export const useClientQuery = (cache, query, queryNames = []) => {

  const { data: clientData } = useQuery(query, {
    skip: !isBrowser(),
  })

  return compareCacheWithClient(cache, clientData, queryNames)

}
