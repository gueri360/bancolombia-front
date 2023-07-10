migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("32sjwyac5btc92k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kek799cb",
    "name": "clientId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("32sjwyac5btc92k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kek799cb",
    "name": "client",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
