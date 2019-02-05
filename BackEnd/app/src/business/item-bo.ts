import promise=require("promise");
import {ItemDTO} from "../dto/item-dto";
import {pool} from "../db/db-pool";
import {ItemDAO} from "../dao/custom/item-dao";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {CustomerDAO} from "../dao/custom/customer-dao";



export class ItemBO {

    findAllItems():promise <Array<ItemDTO>>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.findAll();
                    promise.then(items => {
                        resolve(items);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }


    findItems(id: string): Promise<Array<ItemDTO>>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.find(id);
                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }



    saveItems(item: ItemDTO): Promise<boolean>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.save(item);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }


    updateItems(item: ItemDTO): Promise<boolean>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.update(item);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    deleteItems(id: string): Promise<boolean>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }


    countAll(): promise<number>{
        return new promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.count();
                    promise.then(result => {

                        // console.log("dfdfdfd"+result)
                        resolve(result);

                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }
}