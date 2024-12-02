import MyTableHeader from '../../../components/table/my-table-header.tsx';
import MyColumn from '../../../components/table/my-column.tsx';
import {Button, Cell, Table, TableBody} from 'react-aria-components';
import MyRow from '../../../components/table/my-row.tsx';
import {Envelope, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyTable({items}) {
    return (
        <Table className="w-full border-separate border-spacing-0" aria-label="Contacts">
            <MyTableHeader>
                <MyColumn className="pl-4" isRowHeader>User</MyColumn>
                <MyColumn>Contact</MyColumn>
                {/* <MyColumn>Address</MyColumn> */}

                <MyColumn></MyColumn>
                <MyColumn></MyColumn>
            </MyTableHeader>
            <TableBody items={items}>
                {item => (
                    <MyRow onAction={() => (<div>hello!</div>)}>
                        <Cell>
                            <div className="flex gap-4 pt-4 pl-4 pb-4">
                                <img src={AnonymousProfile} className="h-12 w-12 rounded-full"/>
                                <span className="flex flex-col">
                                    <span className="text-lg">{item.first} {item.last}</span>
                                    <span className="text-sm text-oxford-blue/75">{item.role}</span>
                                </span>
                            </div>
                        </Cell>
                        <Cell>
                            <div className="flex flex-col gap-2 text-sm text-oxford-blue/75">
                                <span className="flex items-center gap-2"><Phone weight="bold"/>{item.phone}</span>
                                <span className="flex items-center gap-2"><Envelope weight="bold"/>{item.email}</span>
                            </div>
                        </Cell>
                        {/* <Cell>
                            <div className="flex flex-col gap-2 text-sm text-oxford-blue/75">
                                <span>{item.address}</span>
                                <span>{item.city}, {item.province} {item.postal}</span>
                            </div>
                        </Cell> */}
                        <Cell>
                            <div className="flex flex-col gap-x-4 gap-y-2 text-sm">
                                {/* {item.primary &&
                                    <div className="flex pl-2 pr-2 pt-1 pb-1 bg-amber-200 text-amber-800 rounded-sm">
                                        Primary Contact
                                    </div>
                                }
                                {item.billing &&
                                    <div className="flex pl-2 pr-2 pt-1 pb-1 bg-blue-200 text-blue-800 rounded-sm">
                                        Billing Contact
                                    </div>
                                } */}
                                {item.primary &&
                                    <span className="text-sm text-amber-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-amber-600 mr-1.5 ml-0.5"/>
                                        Primary Contact
                                    </span>
                                }
                                {item.billing &&
                                    <span className="text-sm text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Billing Contact
                                    </span>
                                }
                                {item.web ?
                                    // (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-green-200 text-green-800 rounded-sm">
                                    //     {item.web}
                                    // </div>)
                                    (<span className="text-sm text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        {item.web}
                                    </span>)
                                    :
                                    (<div className="flex pl-2 pr-2 pt-1 pb-1 bg-red-200 text-red-800 rounded-sm">
                                        Not Web-Enabled
                                    </div>)
                                }
                            </div>
                        </Cell>
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