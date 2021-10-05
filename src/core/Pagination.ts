class Pagination{
    items: Array<Object>;
    itemsPerPage: number;
    totalCount: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    pageCount: number;

    constructor(items: Array<Object>, pageCount: number, currentPage: number, itemsPerPage=20){
        this.items = items;
        this.itemsPerPage = itemsPerPage;
        this.totalCount = items.length;
        this.pageCount = pageCount;
        this.currentPage = currentPage;
        this.prevPage = this.currentPage > 1 ? this.currentPage - 1 : 0;
        this.nextPage = this.currentPage === this.pageCount ? 0 : this.currentPage + 1;
    }

    resultPages() {
        return {
            itemsPerPage: this.itemsPerPage,
            totalCount: this.totalCount,
            currentPage: this.currentPage,
            prevPage: this.prevPage,
            nextPage: this.nextPage,
            pageCount: this.pageCount
        }
    }

    resultItems() {
        const items = this.items.filter((item, index) => {
            if (index >= this.prevPage * this.itemsPerPage && index < this.itemsPerPage * this.currentPage) {
                return item;
            }
            return null;
        })

        return items
    }
}

export default Pagination;