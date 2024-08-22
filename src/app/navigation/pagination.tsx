import "./navigation.css"

export default function Pagination(props: {numberOfPages: number, currentPage: number, setCurrentPage: Function}) {
    const paginationNumbers: Array<number> = [];

    for (let i = 1; i <= props.numberOfPages; i++) {
        paginationNumbers.push(i);
    }

    const nextPage = () => {
        if(props.currentPage == props.numberOfPages) {
            props.setCurrentPage(1);
        } else {
            props.setCurrentPage(props.currentPage+1);
        }
        
    }

    const previousPage = () => {
        if(props.currentPage == 1) {
            props.setCurrentPage(props.numberOfPages);
        } else {
            props.setCurrentPage(props.currentPage-1);
        }
    }

   
    return (
        <div className="join items-center justify-items-center mt-5">
            <button className='join-item btn' onClick={()=> previousPage()}>
                {"<"}
            </button>
            {
                paginationNumbers.map(pageNumber => (
                    <button className={`join-item btn ${props.currentPage==pageNumber ? 'active text-neutral': 'text-neutral'}` } key={pageNumber} onClick={() => props.setCurrentPage(pageNumber)}>
                        {pageNumber}
                    </button>
                ))
            }
            <button className='join-item btn' onClick={() => nextPage()}>
                {">"}
            </button>
        </div>
    )
}
