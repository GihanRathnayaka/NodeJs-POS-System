import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {OrderDTO} from "../dto/order-dto";
import {OrderDAO} from "../dao/custom/order-dao";
import {OderDetails} from "../entity/oder-details";
import promise = require("promise");
import promise2 = require("promise");
import {OrderDetailsDAO} from "../dao/custom/order-details-dao";


export class PlaceOrderBO {



    public saveOrder(order: OrderDTO,od:OderDetails[]): promise<boolean>{

        return new promise(function (resolve, reject) {


            pool.getConnection(function (err,connection) {

                connection.beginTransaction(function (err) {

                    if(err){
                        connection.rollback();
                        connection.release();
                        reject(err);
                    }else{

                        const orderDao=<OrderDAO> getDAO(DAOTypes.ORDER, connection);

                        const promise = orderDao.save(order);

                        promise.then(order=> {

                            console.log("Awa------1")

                            return new promise2(function (resolve, reject) {
                                  const OrderDetailsDAO  = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);

                                        var index=0;
                                        od.forEach(function (odx) {

                                         const pro=  OrderDetailsDAO.save(odx);
                                         index++;
                                         pro.then( odxx=>{

                                            if(od.length==index) {
                                                connection.commit();
                                                connection.release();
                                                resolve(odxx);
                                            }


                                         }).catch(err=>{
                                             connection.rollback();
                                             connection.release();
                                             pool.releaseConnection(connection);
                                         });

                                        });

                            });


                            // pool.releaseConnection(connection);
                        }).catch(error=>{
                            reject(error);
                            pool.releaseConnection(connection);
                        });





                    }

                });


            });
        });



    }






}