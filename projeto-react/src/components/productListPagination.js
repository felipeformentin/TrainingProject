import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default class ProductListPagination extends React.Component {
  constructor(props) {
    super(props);
    this.getPages = this.getPages.bind(this);
  }

  getPages = () => {
    let pages = [];
    let result = Math.ceil(this.props.count / 5);;
    for (let i = 1; i <= result; i++) {
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
    let actualPage = parseInt(this.props.page);
    if(actualPage === undefined) actualPage = 1;
    if(actualPage > 1) actualPage -= 1;
    return "/products/" + actualPage;
  }

  goForward = () => {
    let actualPage = parseInt(this.props.page);
    if(actualPage == undefined) actualPage = 1;
    actualPage += 1;
    return "/products/" + actualPage;
  }

  render() {
    const pages = this.getPages();
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
