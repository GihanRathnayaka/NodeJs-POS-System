import {OrderDAO} from "../order-dao";
import {Order} from "../../../entity/order";
import {PoolConnection} from "mysql";
import promise =require("promise");



export class OrderDaoImpl implements OrderDAO{

    constructor(private connection:PoolConnection){

    }

    delete(id: String): Promise<boolean> {

        return new promise((resolve, reject) => {

            this.connection.query(`DELETE FROM orders WHERE oId='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: String): Promise<Array<Order>> {
        return new promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders WHERE oId='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Order>> {
        return new promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Order): Promise<boolean> {
        return new promise((resolve, reject) => {

            this.connection.query(`INSERT INTO orders VALUES ('${entity.oId}','${entity.oDate}','${entity.cusId}','${entity.total}','${entity.description}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }


    update(entity: Order): Promise<boolean> {
        return new promise((resolve, reject) => {

            console.log(`UPDATE orders SET  oDate= '${entity.oDate}', cusId ='${entity.cusId}', total ='${entity.total}', description ='${entity.total}' WHERE oId='${entity.oId}'`);
            this.connection.query(`UPDATE orders SET  oDate= '${entity.oDate}', cusId ='${entity.cusId}', total ='${entity.total}', description ='${entity.total}' WHERE oId='${entity.oId}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

}