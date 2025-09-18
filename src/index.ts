import { debug, getInput, setFailed, setOutput } from '@actions/core'
import { Client, LogLevel, isFullPage } from '@notionhq/client'
import { markdownToBlocks } from '@tryfabric/martian'

try {
  const body = getInput('body')
  const name = getInput('name')
  const token = getInput('token')
  const tags = getInput('tags') || ''
  const database = getInput('database')
  const date = new Date().toISOString()

  debug('Creating notion client ...')
  const notion = new Client({
    auth: token,
    logLevel: LogLevel.ERROR
  })

  const blocks = markdownToBlocks(body)
  const tagArray = tags
    ? tags.split(',').flatMap(tag => {
        return { name: tag }
      })
    : []

  debug('Creating page ...')
  notion.pages
    .create({
      parent: {
        database_id: database
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        Date: {
          date: {
            start: date
          }
        },
        Tags: {
          multi_select: tagArray
        }
      },
      // @ts-expect-error bad typings
      children: blocks
    })
    .then(result => {
      debug(`${JSON.stringify(result)}`)
      if (!isFullPage(result)) throw new Error('Failed to retrieve page URL')
      setOutput('url', result.url)
    })
    .catch(error => {
      setFailed((error as Error).message)
    })
} catch (error) {
  setFailed((error as Error).message)
}
