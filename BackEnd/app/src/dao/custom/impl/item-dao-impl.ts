import Promise = require("promise");
import {ItemDAO} from "../item-dao";
import {PoolConnection} from "mysql";
import {Item} from "../../../entity/item";

export class ItemDAOImpl implements ItemDAO{


    constructor(private connection: PoolConnection) {
    }

    delete(id: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM items WHERE code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM items WHERE code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM items`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity:Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO items VALUES ('${entity.code}','${entity.description}','${entity.price}','${entity.qty}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

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

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query(`Select count(code) as "count" From items `,(err,result,field)=>{
                if(err){
                    reject(err)
                }else {
                    console.log(result[0].count);
                    resolve(result[0].count);

                }
            })
        })
    }

}

