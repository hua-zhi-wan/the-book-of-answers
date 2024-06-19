const content: Array<string> = require('./content.json')

import type { VercelRequest, VercelResponse } from '@vercel/node'

function stringHash(str: string): number {
    let hash = 0
    if (str.length === 0) return hash

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + charCode
        hash |= 0
    }

    return hash
}

function draw(code: number): [number, string] {
    const size = content.length
    const index = Math.abs(code) % size
    return [index, content[index]]
}

export default function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const query: any = request.query
    let question: string = query.question
    let answer: string
    let index: number
    if (question && question !== '') {
        [index, answer] = draw(stringHash(question))
    }
    else {
        [index, answer] = draw(Date.now())
    }
    return response.status(200).json({
        question: question ?? '',
        index,
        answer,
    })
}