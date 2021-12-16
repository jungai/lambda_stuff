import type { SNSEvent } from 'aws-lambda'

export const snsHandlers = (event: SNSEvent) => {
  console.log('hello')
}
