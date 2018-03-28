import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default class ProductListPagination extends React.Component {
  constructor(props) {
    super(props);
    this.getNumberOfPages = this.getNumberOfPages.bind(this);
  }

  getActualPage = (defaultPageValue) => {
    let actualPage;
    if (this.props.page !== undefined)
      actualPage = parseInt(this.props.page, 10);
    else
      actualPage = defaultPageValue;
    return actualPage;
  }

  getNumberOfPages = () => {
    let pages = [];
    let pageLimit = Math.ceil(this.props.count / 5);
    for (let i = 1; i <= pageLimit; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink tag={Link} to={"/products/" + i}>
            {i}
          </PaginationLink>
        </PaginationItem>);
    }
    return pages;
  }

  goBack = () => {
    let actualPage = this.getActualPage(1);
    if (actualPage > 1) actualPage -= 1;
    return "/products/" + actualPage;
  }

  goForward = () => {
    let actualPage = this.getActualPage(2);
    let pageLimit = Math.ceil(this.props.count / 5);
    if (actualPage < pageLimit) actualPage += 1;
    return "/products/" + actualPage;
  }

  render() {
    const pages = this.getNumberOfPages();
    return (
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous tag={Link} to={this.goBack()} />
        </PaginationItem>
        {pages}
        <PaginationItem>
          <PaginationLink next tag={Link} to={this.goForward()} />
        </PaginationItem>
      </Pagination>
    );
  }
}
