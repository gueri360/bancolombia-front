migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vt53ad7d0t7isi7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "im7tmjjj",
    "name": "doer_id",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vt53ad7d0t7isi7")

  // remove
  collection.schema.removeField("im7tmjjj")

  return dao.saveCollection(collection)
})
