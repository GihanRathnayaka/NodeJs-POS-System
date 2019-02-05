import {OrderDetailsDAO} from "../order-details-dao";
import promise =require("promise");
import {PoolConnection} from "mysql";
import {OderDetails} from "../../../entity/oder-details";



export class  OrderDetailsDAOImpl implements OrderDetailsDAO{

    constructor(private connection: PoolConnection) {
    }

    delete(id: String): Promise<boolean> {
        return new promise((resolve, reject) => {

            this.connection.query(`DELETE FROM ordersdetails WHERE oId='${id}' and id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id:String): Promise<Array<OderDetails>> {
        return new promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM ordersdetails WHERE code='${id}' AND oId='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<OderDetails>> {
        return new promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM ordersdetails`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: OderDetails): Promise<boolean> {
        return new promise((resolve, reject) => {

            this.connection.query(`INSERT INTO ordersdetails(oId, code, description, price, qty) VALUES ('${entity.oId}','${entity.code}','${entity.description}','${entity.price}','${entity.qty}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: OderDetails): Promise<boolean> {
        return new promise( (resolve, reject) => {

            console.log(`UPDATE items SET description = '${entity.description}', price ='${entity.price}', qty ='${entity.qty}' WHERE id='${entity.code}'`);
            this.connection.query(`UPDATE items SET description = '${entity.description}', price ='${entity.price}', qty ='${entity.qty}' WHERE code='${entity.code}'`,
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