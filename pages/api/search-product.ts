import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  let { searchText , pageNo } = req.query
  try {
    if (!searchText) {
      return res.status(400).json({ message: 'search text required' })
    }

    var pageNumber = pageNo ? parseInt(pageNo.toString(),10)*40 : 0 ;
    let startingPage = pageNumber * 40 ;

    
    const results = await query(
      `
      SELECT * FROM products WHERE prodcut.name LIKE '%${searchText}%' ORDER BY ID ASC LIMIT ?,40 
    `,startingPage
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler