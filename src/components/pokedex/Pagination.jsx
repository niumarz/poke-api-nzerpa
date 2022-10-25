import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {
  
  const pagesPerBlock = 8
  //1 / 8 = 0.125...
  //2 / 8 = 0.25...
  //3 / 8 = 0.375...
 // 8 / 8 = 1
  //9 / 8 = 1.125
  //10 / 8 = 1.25
    // 16 / 8 = 2
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLenght = Math.ceil(pagesLength / pagesPerBlock)
  

  const arrPages=[]
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
                    //1         *       8       =   8
                    //  2       *       8       =   16
  const limitPage = blockLenght === currentBlock ? pagesLength : currentBlock * pagesPerBlock
  for(let i = initialPage; i <=limitPage;i++){
    arrPages.push(i)

  }
  
  const handlePrev = ()=>{
    setPage(page - 1)
  }

  const handleNext = ()=>{
    setPage(page + 1)
  }
  
  const handlePage = currentPage=>{
    setPage(currentPage)

  }

    return (
    <div className='pag'>
        {
            page > 1 &&
        <div onClick={handlePrev} className='pag__prev pag__page-active'>&#60; ...</div>
        }

        <ul className='pag__container'>
        {
            arrPages.map(e => (
                <li className={`pag__page ${page === e && 'pag__page-active'}` }
               onClick={() => handlePage(e)}
               key={e}>
                    {e}
                    </li>
            ))
        }
        </ul>
        {
            page < pagesLength &&
        <div onClick={handleNext} className='pag__next pag__page-active'>... &#62;</div>
        }
    </div>
  )
}

export default Pagination