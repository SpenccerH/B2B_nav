import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import {Button, Cell, Table, TableBody} from 'react-aria-components';
import MyRow from '../../../components/table/my-row.tsx';
import {Envelope, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyTable({items}) {
    return (
        <Table className="w-full border-separate border-spacing-0" aria-label="Addresses">
            <MyTableHeader>
                <MyColumn className="pl-4" isRowHeader>Location</MyColumn>
                <MyColumn>Address</MyColumn>
                <MyColumn></MyColumn>
                <MyColumn></MyColumn>
            </MyTableHeader>
            <TableBody items={items}>
                {item => (
                    <MyRow>
                        <Cell>
                            <div className="flex gap-4 pt-4 pl-4 pb-4">
                                <span className="flex flex-col">
                                    <span className="text-lg">{item.location}</span>
                                    <span className="text-sm text-oxford-blue/75">{item.first} {item.last}</span>
                                </span>
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex flex-col gap-2 text-sm text-oxford-blue/75">
                                <span className="flex items-center gap-2">{item.address1} {item.address2}</span>
                                <span className="flex items-center gap-2">{item.city} {item.province}, {item.postal}</span>
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex flex-col gap-x-4 gap-y-2 text-sm">
                                {item.shipping ?
                                    (<span className="text-sm text-amber-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-amber-600 mr-1.5 ml-0.5"/>
                                        Default Shipping Address
                                    </span>)
                                    :
                                    (
                                        <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm w-58">
                                            Set as Default Shipping Address
                                        </Button>
                                    )
                                }
                                {item.billing ?
                                    (<span className="text-sm text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Default Billing Address
                                    </span>)
                                    :
                                    (
                                        // <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                        //     Set as Billing Address
                                        // </Button>
                                        <div />
                                    )
                                }
                            </div>
                        </Cell>
                        {/* <Cell>
                            <div className="flex text-sm">
                                {item.billing ?
                                    (<span className="text-sm text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Default Billing Address
                                    </span>)
                                    :
                                    (
                                        <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                            Set as Billing Address
                                        </Button>
                                        <div />
                                    )
                                }
                            </div>
                        </Cell> */}
                        <Cell>
                            <div className="flex gap-4 items-center">
                                <Button><PencilSimple size={20} /></Button>
                                <Button><Trash size={20} /></Button>
                            </div>
                        </Cell>
                    </MyRow>

                )}
            </TableBody>
        </Table>
    )
}

export default MyTable;