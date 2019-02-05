import {CustomerDAOImpl} from "./custom/impl/customer-dao-impl";
import {PoolConnection} from "mysql";
import {ItemDAOImpl} from "./custom/impl/item-dao-impl";
import {OrderDaoImpl} from "./custom/impl/oders-dao-impl";
import { OrderDetailsDAOImpl} from "./custom/impl/order-details-dao-impl";

export enum DAOTypes{
    CUSTOMER, ITEM,ORDER,ORDERDETAILS
}

export function getDAO(daoType: DAOTypes, connection: PoolConnection){
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new CustomerDAOImpl(connection);
        case DAOTypes.ITEM:
            return new ItemDAOImpl(connection);
        case DAOTypes.ORDER:
            return new OrderDaoImpl(connection);
        case DAOTypes.ORDERDETAILS:
            return new  OrderDetailsDAOImpl(connection);
        default:
            return null;
    }
}