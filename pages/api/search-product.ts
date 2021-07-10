import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  let { searchText , pageNo } = req.query
  try {
    if (!searchText) {
      return res.status(400).json({ message: 'search text required' })
    }
    const productsPerPage = 100;
    var pageNumber = pageNo ? parseInt(pageNo.toString(),10)*productsPerPage : 0 ;
    let startingPage = pageNumber * productsPerPage ;

    
    const results = await query(
      `
      SELECT * FROM product WHERE name LIKE '%${searchText}%' ORDER BY ID ASC LIMIT ?,${productsPerPage} 
    `,startingPage
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler