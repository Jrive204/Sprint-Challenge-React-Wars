import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Page = props => {
  return (
    <div className='page'>
      <Pagination size='lg' aria-label='Page navigation example'>
        <PaginationItem>
          <PaginationLink onClick={props.pageprev} previous href='' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{props.page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink onClick={props.pagechangeradd} next href='' />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Page;
