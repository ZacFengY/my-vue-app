import userData from './userData'

const MOCK_URL = '/mock'

const mockList = [...userData].map(item => ({ ...item, url: `${MOCK_URL}${item.url}` }))

export default mockList
