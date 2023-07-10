migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbvu2ixp",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbvu2ixp",
    "name": "user",
    "type": "relation",
    "required": false,
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
