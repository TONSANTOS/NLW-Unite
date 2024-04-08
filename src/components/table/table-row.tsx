import { ComponentProps } from "react";

interface TableRowPros extends ComponentProps<'tr'> { }

export function TableRow(props: TableRowPros) {
    return (
        <tr {...props} className="border-b border-white/10 hover:bg-white/5" />
    )
}
