import React, {
    useEffect,
    useRef,
    useState
} from 'react';

type DataType = number[]

type TablePropsType = {
    data: DataType[],
    rowHeight: number,
    visibleRows: number
}

export const Table: React.FC<TablePropsType> = ({data, rowHeight, visibleRows}) => {
    const viewPortRef = useRef<HTMLDivElement>(null)
    const [startRow, setStartRow] = useState(0)

    const getTopHeight = () => {
        return rowHeight * startRow
    }

    const getBottomHeight = () => {
        return rowHeight * (data.length - (startRow + visibleRows))
    }

    function onScroll  (e: any) {
        setStartRow(Math.floor(e.target.scrollTop / rowHeight))
    }

    useEffect(() => {
        viewPortRef?.current?.addEventListener('scroll', onScroll)
        return () => {
            viewPortRef?.current?.removeEventListener('scroll', onScroll)
        }
    })

    return (
        <div
            className='viewPort'
            style={{height: rowHeight * visibleRows + 11}}
            ref={viewPortRef}
        >
            <div style={{height: getTopHeight()}}/>
            <table>
                <tbody>
                {data.slice(startRow, startRow + visibleRows + 1).map((row, rowIndex) => (
                    <tr
                        style={{height: rowHeight}}
                        key={startRow + rowIndex + ''}>
                        {row.map((text, colIndex) => (
                            <td key={ startRow + '' + rowIndex + colIndex}>{text}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <div style={{height: getBottomHeight()}}/>
        </div>
    );
};

