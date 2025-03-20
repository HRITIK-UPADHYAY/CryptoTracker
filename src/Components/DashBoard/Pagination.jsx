import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './Style/pagination.css'

export default function PaginationComponent({page, handleChange}) {

  return (
    <div className='pagination'>
      <Pagination count={10} page={page} onChange={(event, value) => handleChange(event, value)}
        sx={{
            color: "var(--white)",
            "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(-blue) !important",
            },
            "& .MuiPaginationItem-ellipsis": {
            border: "1px solid var(--grey) !important",
            },
            "& .MuiPaginationItem-text": {
            color: "var(--white)",
            },  
        }}
      />
    </div>
  );
}
