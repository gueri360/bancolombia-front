migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sze223dj9ofi1jc")

  // remove
  collection.schema.removeField("9o3ir4eh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sze223dj9ofi1jc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9o3ir4eh",
    "name": "doerId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
