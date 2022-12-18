export const makeTableData = (width: number, height: number) => {
    return new Array(height).fill(1).map((_, row) =>{
        return new Array(width).fill(0).map((_, col) => {
            return row * 10 + col
        })
    })
}